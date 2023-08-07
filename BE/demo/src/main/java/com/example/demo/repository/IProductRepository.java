package com.example.demo.repository;

import com.example.demo.model.ProductFruit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<ProductFruit, Long> {

    @Query(value = "SELECT * FROM product_fruit as p\n" +
            "order by create_date desc\n" +
            "limit 4", nativeQuery = true)
    List<ProductFruit> getAllList();
@Query(value = "SELECT * FROM product_fruit as p\n" +
        "        INNER JOIN product_type pt on p.id_type = pt.id\n" +
        "WHERE p.id_type=:id\n" +
        "order by p.create_date desc\n" +
        "limit 4")
}
