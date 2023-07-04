package com.example.webshopbackend.service;

import com.example.webshopbackend.model.User;

import java.util.List;

public interface UserService {
    User save(User user);
    User findByEmail(String email);
    List<User> findAll();
}
