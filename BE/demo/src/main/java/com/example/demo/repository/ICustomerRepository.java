package com.example.demo.repository;

import com.example.demo.model.Customers;
import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICustomerRepository extends JpaRepository<Customers,Long> {

    @Query(value = "SELECT * from customers as c\n" +
            "        INNER JOIN users u on u.id = c.users_id\n" +
            "         WHERE u.user_name=:name", nativeQuery = true)
    Customers findUsers(@Param("name")String name);

}
