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

    public Customer(@NotNull Long id, @NotNull String name, @NotNull String surname, @NotNull String street, @NotNull String housenumber, @NotNull String postalcode, @NotNull String country, @NotNull String mail) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.street = street;
        this.housenumber = housenumber;
        this.postalcode = postalcode;
        this.country = country;
        this.mail = mail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHousenumber() {
        return housenumber;
    }

    public void setHousenumber(String housenumber) {
        this.housenumber = housenumber;
    }

    public String getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(String postalcode) {
        this.postalcode = postalcode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}



