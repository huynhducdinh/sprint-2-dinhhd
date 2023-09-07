package com.example.demo.repository;

import com.example.demo.model.ProductFruit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IProductRepository extends JpaRepository<ProductFruit, Long> {

    @Query(value = "SELECT * FROM product_fruit as pf\n" +
            "WHERE pf.name_fruit LIKE CONCAT('%',:name,'%')\n" +
            "AND (pf.price BETWEEN :about AND :abouts)", nativeQuery = true)
    Page<ProductFruit> getAllFruit(Pageable page,
                                   @Param("name") String name,
                                   @Param("about") String about,
                                   @Param("abouts") String abouts);


    @Query(value = "SELECT * FROM product_fruit as p\n" +
            "order by create_date desc\n" +
            "limit 4", nativeQuery = true)
    List<ProductFruit> getAllList();

    @Query(value = "SELECT * FROM product_fruit as pf\n" +
            "INNER JOIN product_type pt on pf.id_type = pt.id\n" +
            "WHERE pf.id_type=:id\n" +
            "AND pf.name_fruit LIKE CONCAT('%',:name,'%')\n" +
            "AND pf.price BETWEEN :about AND :abouts\n"
            , nativeQuery = true)
    Page<ProductFruit> getAllFruitProduct(@Param("id") Long id, Pageable page,
                                          @Param("name") String name,
                                          @Param("about") String about,
                                          @Param("abouts") String abouts);

    @Query(value = "SELECT * FROM product_fruit as p\n" +
            "        INNER JOIN product_type pt on p.id_type = pt.id\n" +
            "WHERE p.id_type=:id\n" +
            "order by p.create_date desc\n" +
            "limit 4", nativeQuery = true)
    List<ProductFruit> getAllList(@Param("id") Long id);

    @Query(value = "SELECT * FROM product_fruit as p\n" +
            "           WHERE p.is_delete=false", nativeQuery = true)
    Page<ProductFruit> getAllPageFruitAdmin(Pageable page);

    List<ProductFruit> findAll();
    @Transactional
    @Modifying
    @Query(value = "UPDATE product_fruit AS p SET  p.is_delete=true WHERE p.id=:id", nativeQuery = true)
    void deleteByIdFruit(@Param("id") Long id);
}
