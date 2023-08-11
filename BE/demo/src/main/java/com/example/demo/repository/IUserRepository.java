package com.example.demo.repository;

import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<Users,Long> {
    Users findByUserName(String user);

}
