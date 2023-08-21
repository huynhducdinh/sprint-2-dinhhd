package com.example.demo.service;

import com.example.demo.model.Orders;
import com.example.demo.model.OrdersDetail;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrdersDetailService {
    void save(OrdersDetail ordersDetail);
    List<OrdersDetail> findAllOrders (Long id);

}
