package com.example.demo.service;

import com.example.demo.model.ProductFruit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<ProductFruit> findAll(Pageable pageable);
}
