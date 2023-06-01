package com.example.webshopbackend.controller;

import com.example.webshopbackend.model.Customer;
import com.example.webshopbackend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/customer")
public class CustomerController {

    private final CustomerService service;

    @Autowired
    CustomerController (CustomerService service) {
        this.service = service;
    }

    @PostMapping
    public Customer save(@RequestBody Customer customer) {
        return service.save(customer);
    }
}
