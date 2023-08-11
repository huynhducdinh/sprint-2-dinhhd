package com.example.demo.controller;

import com.example.demo.config.JwtUserDetails;
import com.example.demo.model.Customers;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.jaas.JaasAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
//    @Autowired
//    private ICustomerService iCustomerService;
//    @GetMapping("")
//    public ResponseEntity<Customers>getAddById(){
//        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
//        JwtUserDetails jwtUserDetails= (JwtUserDetails) authentication.getPrincipal();
//        Customers customers=iCustomerService.findCustomersByNameCustomer(jwtUserDetails.getId());
//        return new ResponseEntity<>(customers, HttpStatus.OK);
//    }
}
