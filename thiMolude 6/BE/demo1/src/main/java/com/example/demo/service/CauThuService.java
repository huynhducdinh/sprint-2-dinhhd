package com.example.demo.service;

import com.example.demo.model.CauThu;
import com.example.demo.repository.ICauThuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CauThuService implements ICauThuService {
    @Autowired
    private ICauThuRepository icauThuRepository;

    @Override
    public void save(CauThu cauThu) {
        icauThuRepository.save(cauThu);
    }

    @Override
    public List<CauThu> findAll() {
        return icauThuRepository.findAll();
    }
}
