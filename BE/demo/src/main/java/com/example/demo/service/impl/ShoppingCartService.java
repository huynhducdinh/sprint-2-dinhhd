package com.example.demo.service.impl;


import com.example.demo.model.Customers;
import com.example.demo.model.Orders;
import com.example.demo.model.ProductFruit;
import com.example.demo.model.ShoppingCart;
import com.example.demo.repository.IProductRepository;
import com.example.demo.repository.IShoppingCartRepository;
import com.example.demo.service.IProductService;
import com.example.demo.service.IShoppingCartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
public class ShoppingCartService implements IShoppingCartService {
    @Autowired
    private IShoppingCartRepository iShoppingCartRepository;
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public void add(ShoppingCart shoppingCart) {
        iShoppingCartRepository.save(shoppingCart);
    }

    @Override
    public void remove(Long id) {
        iShoppingCartRepository.deleteById(id);
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
    public ResponseEntity<?> setQuantityShoppingCart(Integer quantity, Long id) {
        ShoppingCart shoppingCart = iShoppingCartRepository.findById(id).get();
        if (quantity == 0) {
            shoppingCart.setQuantity(shoppingCart.getQuantity() - 1);
            iShoppingCartRepository.save(shoppingCart);
        } else {
            shoppingCart.setQuantity(shoppingCart.getQuantity()+1);
            if (shoppingCart.getQuantity() > shoppingCart.getProductFruit().getQuantity()) {
                return new ResponseEntity<>("Sản phẩm không đủ số lượng", HttpStatus.BAD_REQUEST);
            }
            iShoppingCartRepository.save(shoppingCart);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
