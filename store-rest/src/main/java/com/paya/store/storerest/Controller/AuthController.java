package com.paya.store.storerest.Controller;


import com.paya.store.storerest.Model.User;
import com.paya.store.storerest.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signUp")
    public ResponseEntity<String>signup(){
        return ResponseEntity.ok("Success");
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/*")
    public ResponseEntity<String> login(){
        return ResponseEntity.ok("Hello World!");
    }

}
