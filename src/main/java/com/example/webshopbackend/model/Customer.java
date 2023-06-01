package com.example.webshopbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class Customer {
    @Id
    @GeneratedValue
    @NotNull
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private String surname;
    @NotNull
    private String street;
    @NotNull
    private String housenumber;
    @NotNull
    private String postalcode;
    @NotNull
    private String country;
    @NotNull
    private String mail;

}
