package com.example.demo.model;

import javax.persistence.*;

@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    @Column(name = "is_delete",columnDefinition = "BIT DEFAULT 0")
    private boolean isDelete;
    @ManyToOne
    @JoinColumn(name = "id_customers")
    private Customers customers;
    @ManyToOne
    @JoinColumn(name = "id_product_fruit")
    private ProductFruit productFruit;

    public ShoppingCart() {
    }

    public ShoppingCart(Long id) {
        this.id = id;
    }

    public ShoppingCart(Long id, Integer quantity, boolean isDelete, Customers customers, ProductFruit productFruit) {
        this.id = id;
        this.quantity = quantity;
        this.isDelete = isDelete;
        this.customers = customers;
        this.productFruit = productFruit;
    }

    public ShoppingCart(Integer quantity, Customers customers, ProductFruit productFruit) {
        this.quantity = quantity;
        this.customers = customers;
        this.productFruit = productFruit;
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

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }

    public ProductFruit getProductFruit() {
        return productFruit;
    }

    public void setProductFruit(ProductFruit productFruit) {
        this.productFruit = productFruit;
    }
}
