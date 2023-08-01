package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Penalty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String maPenalty;
    private Integer gocSuat;
    private String xacSuat;
    @Column(name = "xoa_penalty", columnDefinition = "BIT DEFAULT 0")
    private boolean xoaPenalty;
    @ManyToOne
    @JoinColumn(name = "cau_thu_id")
    private CauThu cauThu;

    public Penalty() {
    }

    public Penalty(Long id) {
        this.id = id;
    }

    public Penalty(Long id, String maPenalty, Integer gocSuat, String xacSuat, Boolean xoaPenalty, CauThu cauThu) {
        this.id = id;
        this.maPenalty = maPenalty;
        this.gocSuat = gocSuat;
        this.xacSuat = xacSuat;
        this.xoaPenalty = xoaPenalty;
        this.cauThu = cauThu;
    }

    public Boolean getXoaPenalty() {
        return xoaPenalty;
    }

    public void setXoaPenalty(Boolean xoaPenalty) {
        this.xoaPenalty = xoaPenalty;
    }

    public String getXacSuat() {
        return xacSuat;
    }

    public void setXacSuat(String xacSuat) {
        this.xacSuat = xacSuat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMaPenalty() {
        return maPenalty;
    }

    public void setMaPenalty(String maPenalty) {
        this.maPenalty = maPenalty;
    }

    public Integer getGocSuat() {
        return gocSuat;
    }

    public void setGocSuat(Integer gocSuat) {
        this.gocSuat = gocSuat;
    }

    public CauThu getCauThu() {
        return cauThu;
    }

    public void setCauThu(CauThu cauThu) {
        this.cauThu = cauThu;
    }
}
