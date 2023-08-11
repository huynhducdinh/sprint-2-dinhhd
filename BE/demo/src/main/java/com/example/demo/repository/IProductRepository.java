package com.example.demo.repository;

import com.example.demo.model.ProductFruit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<ProductFruit, Long> {

    @Query(value = "SELECT * FROM product_fruit as p\n" +
            "order by create_date desc\n" +
            "limit 4", nativeQuery = true)
    List<ProductFruit> getAllList();

    @Query(value = "SELECT * FROM product_fruit as p\n" +
            "        INNER JOIN product_type pt on p.id_type = pt.id\n" +
            "WHERE p.id_type=:id\n"
            , nativeQuery = true)
    Page<ProductFruit> getAllFruitProduct(@Param("id") Long id, Pageable page);

    @Query(value = "SELECT * FROM product_fruit as p\n" +
            "        INNER JOIN product_type pt on p.id_type = pt.id\n" +
            "WHERE p.id_type=:id\n" +
            "order by p.create_date desc\n" +
            "limit 4", nativeQuery = true)
    List<ProductFruit> getAllList(@Param("id") Long id);

    @Query(value = "SELECT * FROM product_fruit as pf\n" +
            "WHERE pf.id=:id AND is_delete=false", nativeQuery = true)
    ProductFruit findProductFruitByNameFruit(@Param("id") Long id);

    @Query(value = "SELECT * From product_fruit as s\n" +
            "INNER JOIN shopping_cart sc on s.id = sc.id_product_fruit\n" +
            "INNER JOIN customers c on sc.id_customers = c.id\n" +
            "WHERE s.id=:idFruit",nativeQuery = true)
    ProductFruit findShoppingCartByProductFruitId(@Param("idFruit")Long idFruit);
}
