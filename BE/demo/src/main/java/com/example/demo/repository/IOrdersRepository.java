package com.example.demo.repository;

import com.example.demo.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IOrdersRepository extends JpaRepository<Orders,Long> {
    @Query(value = "SELECT * FROM orders as o\n" +
            "LEFT JOIN customers c on c.id = o.id_customers\n" +
            "WHERE c.id=:idCustomer", nativeQuery = true)
    List<Orders> findAll(@Param("idCustomer") Long idCustomer);

}
