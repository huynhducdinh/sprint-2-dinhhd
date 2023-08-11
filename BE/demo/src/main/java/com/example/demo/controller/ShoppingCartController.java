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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    @GetMapping()
    public ResponseEntity<List<ShoppingCart>> getAll() {
        List<ShoppingCart> shoppingCarts = ishoppingCartService.findAll();
        return new ResponseEntity<>(shoppingCarts, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<?> addShoppingCart(HttpServletRequest httpServletRequest, @RequestParam(value = "quantity" ) Integer quantity,
                                             @RequestParam(value = "idFruit") Long idFruit
    ) {
        ProductFruit productFruit = iProductService.findById(idFruit);
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = iCustomerService.findUsersId(username);

//        ProductFruit productFruit1 = iProductService.findShoppingCartByProductFruitId(idFruit);
//        List<ShoppingCart> shoppingCarts = ishoppingCartService.findAll();
//        for (int i = 0; i <shoppingCarts.size() ; i++) {
//          if (idFruit==shoppingCarts.get(i).getProductFruit().getId()){
//              ShoppingCart shoppingCart = new ShoppingCart(shoppingCarts.get(i).getQuantity()+1, customers, productFruit);
//              ishoppingCartService.remove(shoppingCarts.get(i).getId());
//              ishoppingCartService.add(shoppingCart);
//          }
//        }
//          if (productFruit==null){
//
//              ShoppingCart shoppingCart = new ShoppingCart(quantity, customers, productFruit);
//              ishoppingCartService.add(shoppingCart);
//          }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
