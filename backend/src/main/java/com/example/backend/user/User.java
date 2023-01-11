package com.example.backend.user;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Collection;


@Entity
public class User implements UserDetails {

    @Id
    private int id;
    private String username;
    private String email;
    private String password;
    private Boolean locked = false;
    private Boolean enabled = false;

    public User(String username, String email, String password, Boolean locked, Boolean enabled) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.locked = locked;
        this.enabled = enabled;
    }

    public User(String username, String email, String password) {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
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

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
