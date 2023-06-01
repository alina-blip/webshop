package com.example.webshopbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity()
public class Original {

    @Id
    @GeneratedValue
    private long id;
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public byte getImage_data() {
        return image_data;
    }

    public void setImage_data(byte image_data) {
        this.image_data = image_data;
    }
}
