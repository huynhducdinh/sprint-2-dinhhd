package com.example.demo.controller;

import com.example.demo.config.JwtTokenUtil;
import com.example.demo.config.JwtUserDetails;
import com.example.demo.model.Customers;
import com.example.demo.model.Orders;
import com.example.demo.model.OrdersDetail;
import com.example.demo.model.ShoppingCart;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

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

    @PostMapping()
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
        Orders orders = new Orders(totalPrice, customers);
        iOrdersService.save(orders);
        for (int i = 0; i < shoppingCartList.size(); i++) {
            OrdersDetail ordersDetail = new OrdersDetail(
                    shoppingCartList.get(i).getQuantity(),
                    shoppingCartList.get(i).getProductFruit().getPrice(),
                    shoppingCartList.get(i).getProductFruit(),
                    orders);
            iOrdersDetailService.save(ordersDetail);
            ishoppingCartService.deleteById(shoppingCartList.get(i).getCustomers());
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/history")
    public ResponseEntity<List<Orders>> getAll(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = iCustomerService.findUsersName(username);
        List<Orders> ordersList = iOrdersService.findAll(customers.getId());
        return new ResponseEntity<>(ordersList, HttpStatus.OK);
    }

    @GetMapping("/history/detail")
    public ResponseEntity<List<OrdersDetail>> historyDetail(@RequestParam("id") Long id) {
        List<OrdersDetail> orders = iOrdersDetailService.findAllOrders(id);
        if (orders.isEmpty() && orders == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
