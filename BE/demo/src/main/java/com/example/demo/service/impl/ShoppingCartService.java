package com.example.demo.service.impl;


import com.example.demo.model.Customers;
import com.example.demo.model.Orders;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.ShoppingCart;
import com.example.demo.repository.IShoppingCartRepository;
import com.example.demo.service.IProductService;
import com.example.demo.service.IShoppingCartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

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
    public List<ShoppingCart> findAll() {
        return iShoppingCartRepository.findAll();
    }

    @Override
    public ShoppingCart findByCustomersAndProductFruit(Customers customers, ProductFruit productFruit) {
        return iShoppingCartRepository.findByCustomersAndProductFruit(customers, productFruit);
    }

    @Override
    public void setQuantityShoppingCart(Integer quantity, Long id) {
        ShoppingCart shoppingCart=iShoppingCartRepository.findById(id).get();
        if (quantity==0){
            shoppingCart.setQuantity(shoppingCart.getQuantity()-1);
            iShoppingCartRepository.save(shoppingCart);
        }else {
            shoppingCart.setQuantity(shoppingCart.getQuantity()+1);
            iShoppingCartRepository.save(shoppingCart);
        }
    }


}
