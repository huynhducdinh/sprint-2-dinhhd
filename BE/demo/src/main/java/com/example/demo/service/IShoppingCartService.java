package com.example.demo.service;

import com.example.demo.model.Customers;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.ShoppingCart;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;


import java.util.List;

public interface IShoppingCartService {
    void add(ShoppingCart shoppingCart);

    void remove(Long id);

    List<ShoppingCart> finAllByShopping(Long id);

    ShoppingCart findByCustomersAndProductFruit(Customers customers, ProductFruit productFruit);

    ResponseEntity<?> setQuantityShoppingCart(Integer quantity, Long id);
}
