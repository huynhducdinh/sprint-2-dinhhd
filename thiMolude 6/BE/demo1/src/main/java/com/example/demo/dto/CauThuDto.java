package com.example.demo.dto;

import com.example.demo.model.DoiTuyen;

import javax.validation.constraints.Pattern;

public class CauThuDto {
    private Long id;
    @Pattern(regexp = "^[0-9]$",message = "Phải là số ")
    private String maCauThu;
    private String tenCauThu;
    private String ngaySinh;
    private DoiTuyen doiTuyen;

    public CauThuDto(Long id) {
        this.id = id;
    }

    public CauThuDto() {
    }

    public CauThuDto(Long id, String maCauThu, String tenCauThu, String ngaySinh, DoiTuyen doiTuyen) {
        this.id = id;
        this.maCauThu = maCauThu;
        this.tenCauThu = tenCauThu;
        this.ngaySinh = ngaySinh;
        this.doiTuyen = doiTuyen;
    }

    public CauThuDto(Long id, String tenCauThu, String ngaySinh, DoiTuyen doiTuyen) {
        this.id = id;
        this.tenCauThu = tenCauThu;
        this.ngaySinh = ngaySinh;
        this.doiTuyen = doiTuyen;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMaCauThu() {
        return maCauThu;
    }

    public void setMaCauThu(String maCauThu) {
        this.maCauThu = maCauThu;
    }

    public String getTenCauThu() {
        return tenCauThu;
    }

    public void setTenCauThu(String tenCauThu) {
        this.tenCauThu = tenCauThu;
    }

    public String getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(String ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

    public DoiTuyen getDoiTuyen() {
        return doiTuyen;
    }

    public void setDoiTuyen(DoiTuyen doiTuyen) {
        this.doiTuyen = doiTuyen;
    }
}
