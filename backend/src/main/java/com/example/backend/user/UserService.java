package com.example.backend.user;


import com.example.backend.registration.RegisterService;
import com.example.backend.user.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserService implements RegisterService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public ResponseEntity register(User user) {
        boolean UserExist = userRepo.findByUsername(user.getUsername()).isPresent();
        if (UserExist){
            ResponseEntity.badRequest().body(String.format("user %s already exist",user.getUsername()));
            return ResponseEntity.badRequest().body("this username already exist");
        }
        userRepo.save(user);
        return ResponseEntity.ok().body("User added");
    }

    @Override
    public ResponseEntity login(User user) {
        if (userRepo.findByUsername(user.getUsername()).isPresent()){
            if(userRepo.findByUsername(user.getUsername()).get().getPassword().equals(user.getPassword())){
                user.setLogged(true);
                return ResponseEntity.ok().body("you ale logged in");
            }
            return ResponseEntity.badRequest().body("password incorrect");
        }
        return ResponseEntity.badRequest().body("username incorrect");
    }
}
