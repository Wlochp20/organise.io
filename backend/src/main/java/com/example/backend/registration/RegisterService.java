package com.example.backend.registration;

import com.example.backend.user.User;
import org.springframework.http.ResponseEntity;

public interface RegisterService {
    public ResponseEntity register(User user);
    public ResponseEntity login(User user);
}
