package com.example.demo.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class OrdersDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    private Long price;
    @CreationTimestamp
    @Column(name = "create_date", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;
    @ManyToOne
    @JoinColumn(name = "id_product_fruit")
    private ProductFruit productFruit;
    @ManyToOne
    @JoinColumn(name = "id_orders")
    private Orders orders;

    public OrdersDetail() {
    }

    public OrdersDetail(Long id) {
        this.id = id;
    }

    public OrdersDetail(Long id, Integer quantity, Long price, LocalDateTime createDate, ProductFruit productFruit, Orders orders) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.createDate = createDate;
        this.productFruit = productFruit;
        this.orders = orders;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public ProductFruit getProductFruit() {
        return productFruit;
    }

    public void setProductFruit(ProductFruit productFruit) {
        this.productFruit = productFruit;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }
}
