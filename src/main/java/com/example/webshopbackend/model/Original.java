package com.example.webshopbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity()

public class Original {

    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String size;
    @NotNull
    private String material;
    @NotNull
    private String description;
    @NotNull
    private double price;
    @NotNull
    private byte image_data;

}
