package com.example.demo.service;

import com.example.demo.model.Customers;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.Users;
import org.springframework.data.repository.query.Param;

public interface ICustomerService {
    Customers findUsersName(String username);
}
