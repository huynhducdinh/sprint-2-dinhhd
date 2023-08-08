package com.example.demo.service.impl;

import com.example.demo.model.ProductFruit;
import com.example.demo.model.ProductType;
import com.example.demo.repository.IProductRepository;
import com.example.demo.repository.IProductTypeRepository;
import com.example.demo.service.IProductService;
import com.example.demo.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository iProductTypeRepository;



}
