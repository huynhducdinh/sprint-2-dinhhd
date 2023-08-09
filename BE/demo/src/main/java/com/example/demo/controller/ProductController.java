package com.example.demo.controller;

import com.example.demo.model.ProductFruit;
import com.example.demo.model.ProductType;
import com.example.demo.service.IProductService;
import com.example.demo.service.IProductTypeService;
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
    public ResponseEntity<Page<ProductFruit>> getAll(@RequestParam(value = "page",defaultValue = "0") Integer page) {
        Page<ProductFruit> productFruitPage = iProductService.findAll(page);
        if (productFruitPage == null && productFruitPage.isEmpty()) {
            return new ResponseEntity<>(productFruitPage,HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(productFruitPage, HttpStatus.OK);
        }
    }

    @GetMapping("/{id}/fruit")
    public ResponseEntity<Page<ProductFruit>> findAll(@PageableDefault(size = 4) Pageable pageable, @PathVariable("id") Long id) {
        Page<ProductFruit> productFruitPage = iProductService.getAllFruit(pageable, id);
        if (productFruitPage == null && productFruitPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(productFruitPage, HttpStatus.OK);
        }
    }

    @GetMapping("/list/top4")
    public ResponseEntity<List<ProductFruit>> listResponseEntity() {
        List<ProductFruit> productFruitList = iProductService.getAll();
        if (productFruitList == null && productFruitList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(productFruitList, HttpStatus.OK);
        }

    }

    @GetMapping("/list/{id}/type")
    public ResponseEntity<List<ProductFruit>> getAllType(@PathVariable("id") Long id) {
        List<ProductFruit> productFruitList = iProductService.getAllList(id);
        if (productFruitList == null && productFruitList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(productFruitList, HttpStatus.OK);

        }
    }

    @GetMapping("/detail/{id}/product")
    public ResponseEntity<ProductFruit> detailProduct(@PathVariable("id") Long id) {
        ProductFruit productFruit = iProductService.findById(id);
        if (productFruit == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(productFruit, HttpStatus.OK);

        }
    }
}
