package com.example.demo.model;

import javax.persistence.*;

@Entity
public class TypeFruitBasket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fruitBasket;
    @ManyToOne
    @JoinColumn(name = "type_product_id")
    private ProductType productType;

    public TypeFruitBasket() {
    }

    public TypeFruitBasket(Long id, String fruitBasket, ProductType productType) {
        this.id = id;
        this.fruitBasket = fruitBasket;
        this.productType = productType;
    }

    public TypeFruitBasket(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFruitBasket() {
        return fruitBasket;
    }

    public void setFruitBasket(String fruitBasket) {
        this.fruitBasket = fruitBasket;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
