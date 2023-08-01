package com.example.demo.service;

import com.example.demo.model.CauThu;
import com.example.demo.model.DoiTuyen;

import java.util.List;

public interface ICauThuService {
    void save(CauThu cauThu);
    List<CauThu>findAll();

}
