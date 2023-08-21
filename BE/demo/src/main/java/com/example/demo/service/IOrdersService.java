package com.example.demo.service;

import com.example.demo.model.Orders;
import com.example.demo.model.OrdersDetail;
import com.example.demo.model.ProductFruit;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IOrdersService {
void  save(Orders orders);
    List<Orders> findAll(Long id);


}
