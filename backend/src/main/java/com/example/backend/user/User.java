package com.example.backend.user;



import com.example.backend.board.Board;
import com.example.backend.connector.Connector;

import javax.persistence.*;
import java.util.Set;


@Entity
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private String email;
    private String password;
    private Boolean logged = false;

    @OneToMany(mappedBy = "user")
    Set<Connector> connectors;


    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User() {
    }



    public String getPassword() {
        return password;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return false;
    }

    public void setLogged(Boolean logged) {
        this.logged = logged;
    }

    public boolean getLogged() {
        return logged;
    }
}
