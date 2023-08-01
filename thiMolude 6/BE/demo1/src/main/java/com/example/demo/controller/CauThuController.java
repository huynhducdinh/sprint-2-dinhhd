package com.example.demo.controller;

import com.example.demo.dto.CauThuDto;
import com.example.demo.model.CauThu;
import com.example.demo.service.ICauThuService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cauThu")
public class CauThuController {
    @Autowired
    private ICauThuService iCauThuService;
    @GetMapping("")
    public ResponseEntity<List<CauThu>>getAll(){
      List<CauThu> cauThuList=  iCauThuService.findAll();
      return  new ResponseEntity<>(cauThuList,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<CauThuDto> createCauThu(@RequestBody CauThuDto cauThuDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            CauThu cauThu = new CauThu();
            BeanUtils.copyProperties(cauThuDto, cauThu);
            iCauThuService.save(cauThu);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
}
