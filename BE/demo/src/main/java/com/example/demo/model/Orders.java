package com.example.demo.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "total_price")
    private Long totalPrice;
    @ManyToOne
    @JoinColumn(name = "id_customers")
    private Customers customers;
    @CreationTimestamp
    @Column(name = "create_date", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;

    public Orders() {
    }

    public Orders(Long id) {
        this.id = id;
    }

    public Orders(Customers customers) {
        this.customers = customers;
    }

    public Orders(Long totalPrice, Customers customers) {
        this.totalPrice = totalPrice;
        this.customers = customers;
    }

    public Orders(Long id, Long totalPrice, Customers customers, LocalDateTime createDate) {
        this.id = id;
        this.totalPrice = totalPrice;

        this.customers = customers;
        this.createDate = createDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Long totalPrice) {
        this.totalPrice = totalPrice;
    }



    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }
}
