package com.example.demo.service.impl;

import com.example.demo.model.OrdersDetail;
import com.example.demo.repository.IOrdersDetailRepository;
import com.example.demo.service.IOrdersDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersDetailService  implements IOrdersDetailService {
    @Autowired
    private IOrdersDetailRepository iOrdersDetailRepository;

    @Override
    public void save(OrdersDetail ordersDetail) {
        iOrdersDetailRepository.save(ordersDetail);
    }
}
