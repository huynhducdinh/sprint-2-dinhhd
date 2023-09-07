package com.example.demo.controller;

import com.example.demo.config.JwtTokenUtil;
import com.example.demo.config.JwtUserDetails;
import com.example.demo.model.Customers;
import com.example.demo.model.Orders;
import com.example.demo.model.OrdersDetail;
import com.example.demo.model.ShoppingCart;
import com.example.demo.service.*;
import com.example.demo.service.impl.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Random;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/order/orderDetail")
public class OrderAndOrderDetailController {
    @Autowired
    private IShoppingCartService ishoppingCartService;
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private IOrdersDetailService iOrdersDetailService;
    @Autowired
    private IOrdersService iOrdersService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private EmailService emailService;
    private String body;

    @Transactional
    @PostMapping()
    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    public ResponseEntity<?> saveOrderAndOrderDetail(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = iCustomerService.findUsersName(username);
        List<ShoppingCart> shoppingCartList = ishoppingCartService.finAllByShopping(customers.getId());
        Long totalPrice = 0L;
        for (int i = 0; i < shoppingCartList.size(); i++) {
            totalPrice += shoppingCartList.get(i).getProductFruit().getPrice() * shoppingCartList.get(i).getQuantity();
        }
        List<Orders> ordersList = new ArrayList<>();
        long code;
        Random random = new Random();
        long min = 10000; // Số nhỏ nhất có 5 chữ số
        long max = 99999; // Số lớn nhất có 5 chữ số
        boolean flag;
        String orderCode;
        do {
            flag = true;
            code = random.nextLong() % (max - min + 1) + min;
            orderCode = "OD" + code;
            for (int i = 0; i < ordersList.size(); i++) {
                if (Objects.equals(ordersList.get(i).getCodeOrders(), orderCode)) {
                    flag = false;
                }
            }
        } while (!flag);
        Orders orders = new Orders(totalPrice, orderCode, customers);
        iOrdersService.save(orders);
        Integer amount = 0;
        for (int i = 0; i < shoppingCartList.size(); i++) {
            OrdersDetail ordersDetail = new OrdersDetail(
                    shoppingCartList.get(i).getQuantity(),
                    shoppingCartList.get(i).getProductFruit().getPrice(),
                    shoppingCartList.get(i).getProductFruit(),
                    orders);
            iOrdersDetailService.save(ordersDetail);
            amount = (ordersDetail.getProductFruit().getQuantity() - ordersDetail.getQuantity());
            System.out.println(amount);
            ordersDetail.getProductFruit().setQuantity(amount);
            ishoppingCartService.deleteById(shoppingCartList.get(i).getCustomers());
        }
        List<OrdersDetail> ordersDetailList = iOrdersDetailService.findAllOrdersDetail(orders.getId());

        String to = customers.getEmail();
        String subject = "Bạn có đơn hàng từ Fruit Shop";
        String body = "<h4>Chào " + customers.getNameCustomer() + ",</p>\n" +
                "\n" +
                "<p>Chúng tôi gửi mail này để xác nhận rằng bạn vừa thanh toán một đơn hàng thành công từ Fruit Shop </p>\n" +
                "\n" +
                "<p>Dưới đây là chi tiết hóa đơn của bạn:</p>\n";
        String table = "<table border={1}  style=\"border: 1px solid #DDDDDD;\">";
        table += "<tr>" +
                "<th>Sản phẩm</th>" + "<th>Hình Ảnh</th>" + "<th>Số lượng</th>" + "<th>Giá tiền</th>" +
                "</tr>";
        for (int i = 0; i < ordersDetailList.size(); i++) {
            table += "<tr>" +
                    "<td>" + ordersDetailList.get(i).getProductFruit().getNameFruit() + "</td>" +
                    "<td>"+"<img style=\"width: 20%;\" "+"src="+ordersDetailList.get(i).getProductFruit().getImage()+">"+"</td>"+
                    "<td>" + ordersDetailList.get(i).getQuantity() + "</td>" +
                    "<td>" + ordersDetailList.get(i).getProductFruit().getPrice() + "</td>" +
                    "</tr>";
        }
        table += "</table>";
        body += table;
        body += "\n<p>Chúng tôi xin cảm ơn quý khách đã tin tường và sử dụng dịch vụ của chúng tôi.</p>\n" +
                "</br>" +
                "\n" +
                "</br>" +
                "</br>" +
                "\n" +
                "</br>" +
                "</br>" +
                "\n" +
                "<p>---------------------------------------</p>" + "\n" +
                "<p>Name: Fruit Shop</p>\n" +
                "<p>Mobile: (+84) 0555-777-666</p>\n" +
                "<p>Email: heeyeon09082002@gmail.com</p>\n" +
                "<p>Address: Thị Trấn Ái Nghĩa, Đại Lộc, Quảng Nam</p>";
        System.out.println(body);
        emailService.sendMail(to, subject, body);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/history")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<List<Orders>> getAll(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = iCustomerService.findUsersName(username);
        List<Orders> ordersList = iOrdersService.findAll(customers.getId());
        return new ResponseEntity<>(ordersList, HttpStatus.OK);
    }

    @GetMapping("/history/detail")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER')")
    public ResponseEntity<List<OrdersDetail>> historyDetail(@RequestParam("id") Long id) {
        List<OrdersDetail> orders = iOrdersDetailService.findAllOrders(id);
        if (orders.isEmpty() && orders == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
