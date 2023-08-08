package com.example.demo.repository;

import com.example.demo.model.ProductFruit;
import com.example.demo.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType ,Long> {

}
