package com.paya.store.storerest.Controller;

import com.paya.store.storerest.Model.User;
import com.paya.store.storerest.Service.AuthService;
import com.paya.store.storerest.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    @PostMapping("/signUp")
    public ResponseEntity<Object> signup(final @Valid @RequestBody User user) {
        return authService.createUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(final @RequestBody User user) {
        return authService.login(user);
    }

    @GetMapping("/*")
    public ResponseEntity<String> greeting() {
        return ResponseEntity.ok("Hello World!");
    }

}
