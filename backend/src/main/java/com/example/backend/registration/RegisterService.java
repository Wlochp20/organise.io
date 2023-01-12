package com.example.backend.registration;

import com.example.backend.user.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


public interface RegisterService {
    public ResponseEntity register(User user);
    public ResponseEntity login(User user);
}
