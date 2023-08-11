package com.example.demo.service.impl;

import com.example.demo.model.Customers;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.Users;
import com.example.demo.repository.ICustomerRepository;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;

    @Override
    public Customers findUsersId(String name) {
        return iCustomerRepository.findUsers(name);
    }
}
