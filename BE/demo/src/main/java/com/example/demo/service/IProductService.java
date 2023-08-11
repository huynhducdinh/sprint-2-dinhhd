package com.example.demo.service;

import com.example.demo.model.ProductFruit;
import com.example.demo.model.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductService {
    Page<ProductFruit> findAll(Integer page);
    ProductFruit findById(Long id);
    List<ProductFruit> getAll();
    List<ProductFruit> getAllList(Long id);
    Page<ProductFruit> getAllFruitProduct(Long id,Integer page);
    ProductFruit findShoppingCartByProductFruitId(Long idFruit);
}
