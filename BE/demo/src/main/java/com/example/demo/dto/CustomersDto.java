package com.example.demo.dto;

import java.time.LocalDateTime;

public class CustomersDto {

    private Long id;

    private String nameCustomer;

    private String birthday;
    private Integer gender;

    private String phoneNumber;
    private String address;
    private String email;
    private boolean isDelete;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;

    public CustomersDto() {
    }

    public CustomersDto(Long id, String nameCustomer, String birthday, Integer gender, String phoneNumber, String address, String email, boolean isDelete, LocalDateTime createDate, LocalDateTime updateDate) {
        this.id = id;
        this.nameCustomer = nameCustomer;
        this.birthday = birthday;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
        this.isDelete = isDelete;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }
}
