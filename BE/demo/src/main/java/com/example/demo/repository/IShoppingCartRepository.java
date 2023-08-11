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
    @Query(value = "SELECT *\n" +
            "from shopping_cart as s\n" +
            "         INNER JOIN customers c on s.id_customers = c.id\n" +
            "         INNER JOIN users u on c.users_id = u.id\n" +
            "where u.user_name=:username", nativeQuery = true)
    List<ShoppingCart> findByUserCustomer(@Param("username") String username);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO shopping_cart(quantity,id_customers,id_product_fruit) values(:quantity,:customers,:productFruit)", nativeQuery = true)
    void createShopping(@Param("quantity") Integer quantity, @Param("customers") Long customers, @Param("productFruit") Long productFruit);


}
