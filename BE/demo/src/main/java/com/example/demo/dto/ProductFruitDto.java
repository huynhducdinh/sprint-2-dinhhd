package com.example.demo.dto;

import com.example.demo.model.ProductType;
import com.example.demo.model.SizeProduct;
import com.example.demo.model.Supplier;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

public class ProductFruitDto {

    private Long id;
    private String nameFruit;
    private Long price;
    private String startDay;
    private String endDay;
    private String note;
    private String image;
    private Integer quantity;
    private boolean isDelete = false;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private ProductType productType;
    private Supplier supplier;
    private SizeProduct sizeProduct;

    public ProductFruitDto() {
    }

    public ProductFruitDto(Long id, String nameFruit, Long price, String startDay, String endDay, String note, String image, Integer quantity, boolean isDelete, LocalDateTime createDate, LocalDateTime updateDate, ProductType productType, Supplier supplier, SizeProduct sizeProduct) {
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
        this.sizeProduct = sizeProduct;
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

    public SizeProduct getSizeProduct() {
        return sizeProduct;
    }

    public void setSizeProduct(SizeProduct sizeProduct) {
        this.sizeProduct = sizeProduct;
    }
}
