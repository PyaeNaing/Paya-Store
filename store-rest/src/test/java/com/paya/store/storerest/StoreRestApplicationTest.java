package com.paya.store.storerest;
import com.paya.store.storerest.Repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StoreRestApplicationTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void contextLoads() {

    }

    @Test
    public void test(){


    }

}