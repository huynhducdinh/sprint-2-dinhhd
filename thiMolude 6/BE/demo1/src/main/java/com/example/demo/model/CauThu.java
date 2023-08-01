package com.example.demo.model;

import javax.persistence.*;

@Entity
public class CauThu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String maCauThu;
    private String tenCauThu;
    private String ngaySinh;
;
    @ManyToOne
    @JoinColumn(name = "doi_tuyen_id")
    private DoiTuyen doiTuyen;

    public CauThu() {
    }

    public CauThu(Long id) {
        this.id = id;
    }

    public CauThu(Long id, String maCauThu, String tenCauThu, String ngaySinh, DoiTuyen doiTuyen) {
        this.id = id;
        this.maCauThu = maCauThu;
        this.tenCauThu = tenCauThu;
        this.ngaySinh = ngaySinh;
        this.doiTuyen = doiTuyen;
    }

    public String getMaCauThu() {
        return maCauThu;
    }

    public void setMaCauThu(String maCauThu) {
        this.maCauThu = maCauThu;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
