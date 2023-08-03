package com.example.demo.service;

import com.example.demo.model.ProductFruit;
import com.example.demo.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements  IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<ProductFruit> findAll(Pageable pageable) {
        return iProductRepository.findAll(pageable);
    }
}
