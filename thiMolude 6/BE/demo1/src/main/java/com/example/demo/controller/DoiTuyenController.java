package com.example.demo.controller;

import com.example.demo.model.DoiTuyen;
import com.example.demo.service.IDoiTuyenService;
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
@RequestMapping("/api/doiTuyen")
public class DoiTuyenController {
    @Autowired
    IDoiTuyenService iDoiTuyenService;
    @GetMapping("")
    public ResponseEntity<List<DoiTuyen>>getAll(){
       List<DoiTuyen> doiTuyens= iDoiTuyenService.findAll();
        return new ResponseEntity<>(doiTuyens,HttpStatus.OK);
    }
}
