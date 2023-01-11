package com.example.backend.registration;

import com.example.backend.user.User;
import com.example.backend.user.UserService;

public class RegistrationService {
    private UserService userService;
    public String register(RegistrationRequest request){
        return userService.signUp(
                new User(
                        request.getUsername(),
                        request.getEmail(),
                        request.getPassword()
                )
        );
    }
}
