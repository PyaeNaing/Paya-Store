package com.paya.store.storerest.Controller;

import com.paya.store.storerest.Model.User;
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


    @PostMapping("/signUp")
    public ResponseEntity<Object>signup(final @Valid @RequestBody User user){
        return new ResponseEntity(userService.createUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/logIn")
    public ResponseEntity<Object>logIn(final @Valid @RequestBody User user){
        return new ResponseEntity(userService.createUser(user), HttpStatus.CREATED);
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
