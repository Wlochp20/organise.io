package com.example.backend.user;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService implements UserDetailsService {
    private  UserRepo userRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private final static String USER_NOT_FOUND = "user with email %s not found";

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepo.findByUsername(username).orElseThrow(()-> new UsernameNotFoundException(String.format(USER_NOT_FOUND ,username)));
    }

    public String signUp(User user){
        boolean UserExist = userRepo.findByUsername(user.getUsername()).isPresent();
        if (UserExist){
            throw new IllegalStateException(String.format("user %s already exist",user.getUsername()));
        }
        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        userRepo.save(user);
        return "you signed up";
    }
}
