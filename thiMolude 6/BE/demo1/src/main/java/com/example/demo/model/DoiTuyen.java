package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class DoiTuyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tenDoiTuyen;
    private String tenHuanLuyenVien;

    public DoiTuyen(Long id) {
        this.id = id;
    }

    public DoiTuyen() {
    }

    public DoiTuyen(Long id, String tenDoiTuyen, String tenHuanLuyenVien) {
        this.id = id;
        this.tenDoiTuyen = tenDoiTuyen;
        this.tenHuanLuyenVien = tenHuanLuyenVien;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTenDoiTuyen() {
        return tenDoiTuyen;
    }

    public void setTenDoiTuyen(String tenDoiTuyen) {
        this.tenDoiTuyen = tenDoiTuyen;
    }

    public String getTenHuanLuyenVien() {
        return tenHuanLuyenVien;
    }

    public void setTenHuanLuyenVien(String tenHuanLuyenVien) {
        this.tenHuanLuyenVien = tenHuanLuyenVien;
    }
}
