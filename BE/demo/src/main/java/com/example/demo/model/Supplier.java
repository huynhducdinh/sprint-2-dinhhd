package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name_supplier")
    private String nameSupplier;
    private String address;
    @Column(name = "phone_number")
    private String phoneNumber;

    public Supplier() {
    }

    public Supplier(Long id) {
        this.id = id;
    }

    public Supplier(Long id, String nameSupplier, String address, String phoneNumber) {
        this.id = id;
        this.nameSupplier = nameSupplier;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameSupplier() {
        return nameSupplier;
    }

    public void setNameSupplier(String nameSupplier) {
        this.nameSupplier = nameSupplier;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
