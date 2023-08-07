package com.example.demo.controller;

import com.example.demo.model.ProductFruit;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @GetMapping()
    public ResponseEntity<Page<ProductFruit>> getAll(@PageableDefault(size = 9) Pageable pageable) {
        Page<ProductFruit> productFruitPage = iProductService.findAll(pageable);
        return new ResponseEntity<>(productFruitPage, HttpStatus.OK);
    }
    @GetMapping("/list/top4")
    public ResponseEntity<List<ProductFruit>> listResponseEntity(){
        List<ProductFruit>productFruitList=iProductService.getAll();
        return new ResponseEntity<>(productFruitList,HttpStatus.OK);
    }

    @GetMapping("/detail/{id}/product")
    public ResponseEntity<ProductFruit> detailProduct(@PathVariable("id") Long id) {
        ProductFruit productFruit = iProductService.findById(id);
        return new ResponseEntity<>(productFruit, HttpStatus.OK);
    }
}
