package com.example.demo.repository;


import com.example.demo.model.OrdersDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface IOrdersDetailRepository extends JpaRepository<OrdersDetail,Long> {
    @Query(value = "SELECT * FROM  orders_detail as od\n" +
            "    left join orders o on o.id = od.id_orders\n" +
            "            WHERE o.id=:id\n",nativeQuery = true)
    List<OrdersDetail> findAllOrders(@Param("id")Long id);
}
