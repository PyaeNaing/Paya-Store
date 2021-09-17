package com.paya.store.storerest.Service;

import com.paya.store.storerest.Model.User;
import com.paya.store.storerest.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("userService")
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        List<User> users = new ArrayList<>();
        users.addAll(userRepository.findAll());
        return users;
    }


}
