package com.paya.store.storerest.Service;
import com.paya.store.storerest.Model.User;
import com.paya.store.storerest.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("authService")
public class AuthService {

    @Autowired
    UserRepository userRepository;

    public ResponseEntity<Object> createUser(User user){
        User newUser = userRepository.save(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    public ResponseEntity <Object> login(User user){
        User login = userRepository.findOneByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (login != null) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

    }
}
