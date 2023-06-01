package com.example.webshopbackend.repository;

import com.example.webshopbackend.model.Original;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OriginalRepository  extends JpaRepository<Original, Long> {

    @Override
    List<Original> findAll();

}
