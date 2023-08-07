package com.example.demo.service.impl;

import com.example.demo.model.SizeProduct;
import com.example.demo.repository.ISizeProductRepository;
import com.example.demo.service.ISizeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeProductService implements ISizeProductService {
    @Autowired
    private ISizeProductRepository iSizeProductRepository;
    @Override
    public List<SizeProduct> getAll() {
        return iSizeProductRepository.findAll();
    }
}
