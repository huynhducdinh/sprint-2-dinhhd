package com.example.demo.service;

import com.example.demo.model.DoiTuyen;
import com.example.demo.repository.IDoiTuyenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoiTuyenService implements IDoiTuyenService{
    @Autowired
    private IDoiTuyenRepository iDoiTuyenRepository;

    @Override
    public List<DoiTuyen> findAll() {
        return iDoiTuyenRepository.findAll();
    }
}
