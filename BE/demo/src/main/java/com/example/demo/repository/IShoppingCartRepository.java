package com.example.demo.repository;

import com.example.demo.model.Customers;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


import javax.transaction.Transactional;
import java.util.List;


public interface IShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {

    ShoppingCart findByCustomersAndProductFruit(Customers customers, ProductFruit productFruit);

    @Query(value = "SELECT * FROM shopping_cart as p\n" +
            "INNER JOIN customers c on p.id_customers = c.id\n" +
            "WHERE p.id_customers=:id\n"
            , nativeQuery = true)
    List<ShoppingCart>findAllCustomers(Long id);


    @Transactional
    @Modifying
    void deleteShoppingCartByCustomers(Customers customers);


}
