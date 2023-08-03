package com.example.demo.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class ProductFruit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name_fruit")
    private String nameFruit;
    private Long price;
    @Column(name = "start_day")

    private String startDay;
    @Column(name = "end_day")

    private String endDay;
    private String note;
    private String image;
    private Integer quantity;
    @Column(name = "is_delete",columnDefinition = "BIT DEFAULT 0")
    private boolean isDelete = false;
    @CreationTimestamp
    @Column(name = "create_date", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;
    @UpdateTimestamp
    @Column(name = "update_date", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime updateDate;
    @ManyToOne
    @JoinColumn(name = "id_type")
    private ProductType productType;
    @ManyToOne
    @JoinColumn(name = "id_supplier")
    private Supplier supplier;

    public ProductFruit() {
    }

    public ProductFruit(Long id) {
        this.id = id;
    }

    public ProductFruit(Long id, String nameFruit, Long price, String startDay, String endDay, String note, String image, Integer quantity, boolean isDelete, LocalDateTime createDate, LocalDateTime updateDate, ProductType productType, Supplier supplier) {
        this.id = id;
        this.nameFruit = nameFruit;
        this.price = price;
        this.startDay = startDay;
        this.endDay = endDay;
        this.note = note;
        this.image = image;
        this.quantity = quantity;
        this.isDelete = isDelete;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.productType = productType;
        this.supplier = supplier;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameFruit() {
        return nameFruit;
    }

    public void setNameFruit(String nameFruit) {
        this.nameFruit = nameFruit;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
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

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
