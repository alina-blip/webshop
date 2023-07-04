package com.example.webshopbackend.service;

import com.example.webshopbackend.model.User;
import com.example.webshopbackend.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class UserServiceImpl implements UserService {
private final UserRepository repository;
    @Autowired
    UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public User save(User user) {
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);
        return repository.save(user);
    }

    @Override
    public List<User> findAll() {
        return repository.findAll();
    }
    @Override
    public User findByEmail(String email) {
        return repository.findByEmail(email);
    }

}
