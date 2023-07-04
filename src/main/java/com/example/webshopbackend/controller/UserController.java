package com.example.webshopbackend.controller;
import com.example.webshopbackend.model.User;
import com.example.webshopbackend.service.UserService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService service;

    @Autowired
    UserController(UserService service) {
        this.service = service;
    }
    @GetMapping("")
    public List<User> all() {
        return service.findAll();
    }

    @PostMapping("")
    public User save(@RequestBody User user) {
        return service.save(user);
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User existingUser = service.findByEmail(user.getEmail());
        if (existingUser != null) {
            // Compare the provided login password with the stored hashed password
            if (BCrypt.checkpw(user.getPassword(), existingUser.getPassword())) {
                return ResponseEntity.ok("{\"message\": \"Login successful\"}");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"Invalid credentials\"}");
    }
}
