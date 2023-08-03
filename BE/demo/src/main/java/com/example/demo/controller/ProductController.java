package com.example.demo.controller;

import com.example.demo.model.ProductFruit;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @GetMapping()
    public ResponseEntity<Page<ProductFruit>> getAll(@PageableDefault(size = 9)Pageable pageable){
        Page<ProductFruit> productFruitPage=iProductService.findAll(pageable);
        return  new ResponseEntity<>(productFruitPage, HttpStatus.OK);
    }
}
