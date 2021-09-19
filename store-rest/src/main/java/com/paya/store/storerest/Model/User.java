package com.paya.store.storerest.Model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue
    private long id;
    @NotBlank(message = "First name is required")
    @Column(name="firstname")
    private String firstName;
    @NotBlank(message = "Last name is required")
    @Column(name="lastname")
    private String lastName;
    @NotBlank(message = "Username is required")
    @Column(name="username")
    private String username;
    @NotBlank(message = "Password is required")
    @Column(name="password")
    private String password;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
