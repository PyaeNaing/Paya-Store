package com.paya.store.storerest.Repository;

import com.paya.store.storerest.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findOneByUsername(String username);
    User findOneByUsernameAndPassword(String username, String password);

}
