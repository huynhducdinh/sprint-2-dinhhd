package com.example.demo.controller;

import com.example.demo.model.ProductType;
import com.example.demo.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/type")
public class ProductTypeController {
    @Autowired
    private IProductTypeService iProductTypeService;
    @GetMapping("")
    public ResponseEntity<List<ProductType>> getAll(){
        List<ProductType>productTypeList=iProductTypeService.getAll();
        return  new ResponseEntity<>(productTypeList,HttpStatus.OK);
    }
}
