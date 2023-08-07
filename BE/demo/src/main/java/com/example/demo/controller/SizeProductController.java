package com.example.demo.controller;

import com.example.demo.model.SizeProduct;
import com.example.demo.service.ISizeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/size")
public class SizeProductController {
    @Autowired
   private ISizeProductService iSizeProductService;
    @GetMapping()
    public ResponseEntity<List<SizeProduct>>getAll(){
        List<SizeProduct> sizeProductList=iSizeProductService.getAll();
        return new ResponseEntity<>(sizeProductList, HttpStatus.OK);
    }
}
