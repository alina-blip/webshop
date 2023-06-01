package com.example.webshopbackend.model;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.util.Date;

public class Cart {

    @Id
    @GeneratedValue
    private Long id;
    private Customer customer;
    private Original original;
    private String category;
    // Original | Print | Sticker;
    private String size;
    private Number count;
    private Date date;
}
