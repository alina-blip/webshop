package com.example.webshopbackend.controller;
import com.example.webshopbackend.model.Original;
import com.example.webshopbackend.model.User;
import com.example.webshopbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService service;

    @Autowired
    UserController(UserService service) {
        this.service = service;
    }
    @GetMapping("")
    public List<User> all() {
        return service.findAll();
    }

    @PostMapping("")
    public User save(@RequestBody User user) {
        return service.save(user);
    }


}
