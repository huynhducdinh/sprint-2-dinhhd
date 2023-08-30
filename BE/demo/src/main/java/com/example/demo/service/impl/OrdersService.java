package com.example.demo.service.impl;

import com.example.demo.model.Orders;
import com.example.demo.model.OrdersDetail;
import com.example.demo.repository.IOrdersRepository;
import com.example.demo.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrdersService implements IOrdersService {
    @Autowired
    private IOrdersRepository iOrdersRepository;

    @Override
    public void save(Orders orders) {
        iOrdersRepository.save(orders);
    }
    @Override
    public List<Orders> findAll(Long id) {
        return iOrdersRepository.findAll(id);
    }


}
