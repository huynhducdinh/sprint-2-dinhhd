package com.example.demo.repository;

import com.example.demo.model.OrdersDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrdersDetailRepository extends JpaRepository<OrdersDetail,Long> {
    @Query(value = "SELECT * FROM orders_detail as od\n" +
            "        LEFT JOIN orders o on o.id = od.id_orders\n" +
            "         LEFT JOIN customers c on c.id = o.id_customers\n" +
            "            WHERE c.id=:id",nativeQuery = true)
    List<OrdersDetail> findAll(@Param("id")Long id);
}
