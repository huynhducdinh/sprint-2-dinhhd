package com.example.demo.controller;


import com.example.demo.config.JwtTokenUtil;
import com.example.demo.config.JwtUserDetails;
import com.example.demo.dto.CustomersDto;
import com.example.demo.dto.ProductFruitDto;
import com.example.demo.model.Customers;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.ShoppingCart;
import com.example.demo.model.Users;
import com.example.demo.service.ICustomerService;
import com.example.demo.service.IProductService;
import com.example.demo.service.IShoppingCartService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.jaas.JaasAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/shoppingCart")

public class ShoppingCartController {
    @Autowired
    private IShoppingCartService ishoppingCartService;
    @Autowired
    private IProductService iProductService;
    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Transactional
    @GetMapping()
    public ResponseEntity<List<ShoppingCart>> getAll(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        if (token.equals("null")) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = iCustomerService.findUsersName(username);
        if (customers == null) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        List<ShoppingCart> shoppingCarts = ishoppingCartService.finAllByShopping(customers.getId());
        return new ResponseEntity<>(shoppingCarts, HttpStatus.OK);
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    public ResponseEntity<?> add(HttpServletRequest httpServletRequest,
                                 @RequestParam(value = "quantity") Integer quantity,
                                 @RequestParam(value = "idFruit") Long idFruit) {

        ProductFruit productFruit = iProductService.findById(idFruit);
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = iCustomerService.findUsersName(username);
        if (quantity > 0) {
            ShoppingCart shoppingCart = ishoppingCartService.findByCustomersAndProductFruit(customers, productFruit);
            if (shoppingCart != null) {
                Integer amount = shoppingCart.getQuantity() + quantity;
                shoppingCart.setQuantity(amount);
//                if (productFruit.getQuantity() < quantity) {
//                    return new ResponseEntity<>("Sản phẩm không đủ số lượng", HttpStatus.BAD_REQUEST);
//                }

//                Integer amount1 = productFruit.getQuantity() - quantity;
//                productFruit.setQuantity(amount1);

                ishoppingCartService.add(shoppingCart);
                return new ResponseEntity<>(shoppingCart, HttpStatus.OK);
            }
        }

        ShoppingCart shoppingCartNew = new ShoppingCart(quantity, customers, productFruit);
        if (productFruit.getQuantity()==0){
            return new ResponseEntity<>("Sản phẩm không đủ số lượng", HttpStatus.BAD_REQUEST);
        }
//        Integer amount1 = productFruit.getQuantity() - shoppingCartNew.getQuantity();
//        productFruit.setQuantity(amount1);
        ishoppingCartService.add(shoppingCartNew);
        return new ResponseEntity<>(shoppingCartNew, HttpStatus.CREATED);
    }

    @DeleteMapping("delete/{id}")
    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    public ResponseEntity<?> deleteShopping(@PathVariable("id") Long id) {
        ishoppingCartService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{setQuantity}/{id}")
    public ResponseEntity<?> setQuantityCart(@PathVariable Integer setQuantity, @PathVariable Long id) {
        ShoppingCart shoppingCart = ishoppingCartService.findById(id);
        if (setQuantity == 0) {
            shoppingCart.setQuantity(shoppingCart.getQuantity() - 1);
            if (shoppingCart.getQuantity() < 1) {
                return new ResponseEntity<>("Sản phẩm thêm vào giỏ hàng phải là 1", HttpStatus.BAD_REQUEST);
            }
//            Integer amount = shoppingCart.getProductFruit().getQuantity() + 1;
//            shoppingCart.getProductFruit().setQuantity(amount);
            ishoppingCartService.setQuantityShoppingCart(shoppingCart);
        } else {
            shoppingCart.setQuantity(shoppingCart.getQuantity() + 1);
            if (shoppingCart.getProductFruit().getQuantity()==0) {
                return new ResponseEntity<>("Sản phẩm không đủ số lượng", HttpStatus.BAD_REQUEST);
            }
//            Integer amount = shoppingCart.getProductFruit().getQuantity() - 1;
//            shoppingCart.getProductFruit().setQuantity(amount);
            ishoppingCartService.setQuantityShoppingCart(shoppingCart);
        }
        return new ResponseEntity<>(shoppingCart, HttpStatus.OK);

    }
}
