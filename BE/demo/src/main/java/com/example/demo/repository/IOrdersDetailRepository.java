package com.example.demo.repository;

import com.example.demo.model.OrdersDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrdersDetailRepository extends JpaRepository<OrdersDetail,Long> {
}
