package com.example.demo.service.impl;


import com.example.demo.model.Customers;
import com.example.demo.model.Orders;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.ShoppingCart;
import com.example.demo.repository.ICustomerRepository;
import com.example.demo.repository.IProductRepository;
import com.example.demo.repository.IShoppingCartRepository;
import com.example.demo.service.ICustomerService;
import com.example.demo.service.IProductService;
import com.example.demo.service.IShoppingCartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;


@Service
public class ShoppingCartService implements IShoppingCartService {
    @Autowired
    private IShoppingCartRepository iShoppingCartRepository;


    @Override
    public void add(ShoppingCart shoppingCart) {
        iShoppingCartRepository.save(shoppingCart);
    }

    @Override
    public void remove(Long id) {
        iShoppingCartRepository.deleteById(id);
    }

    @Override
    public void deleteById(Customers customers) {
        iShoppingCartRepository.deleteShoppingCartByCustomers(customers);
    }

    @Override
    public ShoppingCart findById(Long id) {
        return iShoppingCartRepository.findById(id).get();
    }


    @Transactional
    @Override
    public List<ShoppingCart> finAllByShopping(Long id) {
        return iShoppingCartRepository.findAllCustomers(id);
    }


    @Override
    public ShoppingCart findByCustomersAndProductFruit(Customers customers, ProductFruit productFruit) {
        return iShoppingCartRepository.findByCustomersAndProductFruit(customers, productFruit);
    }


    @Override
    public void setQuantityShoppingCart(ShoppingCart shoppingCart) {
        iShoppingCartRepository.save(shoppingCart);
    }
}
