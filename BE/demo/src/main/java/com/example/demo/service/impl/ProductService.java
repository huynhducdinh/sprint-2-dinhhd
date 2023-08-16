package com.example.demo.service.impl;

import com.example.demo.model.ProductFruit;
import com.example.demo.model.ProductType;
import com.example.demo.repository.IProductRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<ProductFruit> getAllFruit(Integer page, String name, String price) {
        switch (price) {
            case "1":
                return iProductRepository.getAllFruit(PageRequest.of(page, 8), name, "50000", "200000");
            case "2":
                return iProductRepository.getAllFruit(PageRequest.of(page, 8), name, "200000", "500000");
            case "3":
                return iProductRepository.getAllFruit(PageRequest.of(page, 8), name, "500000", "1000000");
            case "4":
                return iProductRepository.getAllFruit(PageRequest.of(page, 8), name, "1000000", "1000000000000");
            default:
                return iProductRepository.getAllFruit(PageRequest.of(page, 8), name, "0", "1000000000000");
        }
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
    public Page<ProductFruit> getAllFruitProduct(Long id, Integer page, String name, String price) {

        switch (price) {
            case "1":
                return iProductRepository.getAllFruitProduct(id, PageRequest.of(page, 8), name, "50000", "200000");
            case "2":
                return iProductRepository.getAllFruitProduct(id, PageRequest.of(page, 8), name, "200000", "500000");
            case "3":
                return iProductRepository.getAllFruitProduct(id, PageRequest.of(page, 8), name, "500000", "1000000");
            case "4":
                return iProductRepository.getAllFruitProduct(id, PageRequest.of(page, 8), name, "1000000", "1000000000000");
            default:
                return iProductRepository.getAllFruitProduct(id, PageRequest.of(page, 8), name, "0", "1000000000000");
        }
    }

    @Override
    public Page<ProductFruit> getAllPageFruitAdmin(Pageable page) {
        return iProductRepository.getAllPageFruitAdmin(page);
    }
}
