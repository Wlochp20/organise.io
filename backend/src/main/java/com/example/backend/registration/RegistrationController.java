package com.example.backend.registration;
import com.example.backend.board.Board;
import com.example.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {
    @Autowired
    private RegisterService registerService;

    @PostMapping(path = "/register")
    public ResponseEntity register(@RequestBody User user){
        return registerService.register(user);
    }

    @PostMapping(path = "/login")
    public ResponseEntity login(@RequestBody User user){
        return registerService.login(user);
    }

    @PostMapping(path = "/addBoard")
    public ResponseEntity addBoard(@RequestBody Board board){
        return registerService.addBoard(board);
    }
}
