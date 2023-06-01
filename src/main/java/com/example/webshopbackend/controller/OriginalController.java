package com.example.webshopbackend.controller;
import java.util.List;
import java.util.Optional;

import com.example.webshopbackend.model.Original;
import com.example.webshopbackend.service.OriginalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController("/original")
public class OriginalController {

    private final OriginalService service;

    @Autowired
    OriginalController(OriginalService service) {
        this.service = service;
    }
    @PostMapping
    public Original save(@RequestBody Original original) {
        return service.save(original);
    }

    @GetMapping
    List<Original> all() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    Optional<Original> one (@PathVariable Long id) {
        return service.findById(id);
    }

}
