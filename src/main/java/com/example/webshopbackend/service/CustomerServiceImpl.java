package com.example.webshopbackend.service;

import com.example.webshopbackend.model.Customer;
import com.example.webshopbackend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class CustomerServiceImpl implements CustomerService {
private final CustomerRepository repository;
    @Autowired
    CustomerServiceImpl(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public Customer save(Customer customer) {
        return repository.save(customer);
    }



}
