package com.example.demo.service.impl;

import com.example.demo.model.ProductFruit;
import com.example.demo.model.ProductType;
import com.example.demo.repository.IProductRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<ProductFruit> findAll(Pageable pageable) {
        return iProductRepository.findAll(pageable);
    }

    @Override
    public ProductFruit findById(Long id) {
        return iProductRepository.findById(id).get();
    }

    @Override
    public List<ProductFruit> getAll() {
        return iProductRepository.getAllList();
    }

    @Override
    public List<ProductFruit> getAllList(Long id) {
        return iProductRepository.getAllList(id);
    }

    @Override
    public Page<ProductFruit> getAllFruit(Pageable pageable, Long id) {
        return iProductRepository.getAllFruit(pageable, id);
    }

}
