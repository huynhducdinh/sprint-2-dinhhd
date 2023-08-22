package com.example.demo.controller;

import com.example.demo.config.JwtTokenUtil;
import com.example.demo.model.Customers;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @GetMapping()
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<?> findAllCustomer(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = iCustomerService.findUsersName(username);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }
}
