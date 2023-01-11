package com.example.backend.registration;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RegistrationController {
    private RegistrationService registrationService;

    @PostMapping(path = "/register")
    public String register(@RequestBody RegistrationRequest request){
        System.out.println("rest works");
        return registrationService.register(request);
    }

}
