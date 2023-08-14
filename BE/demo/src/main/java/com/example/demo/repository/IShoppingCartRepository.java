package com.example.demo.repository;

import com.example.demo.model.Customers;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface IShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {

    ShoppingCart findByCustomersAndProductFruit(Customers customers, ProductFruit productFruit);
}
