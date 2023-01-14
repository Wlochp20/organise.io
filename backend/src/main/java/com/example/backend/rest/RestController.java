package com.example.backend.rest;
import com.example.backend.board.Board;
import com.example.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin
public class RestController {
    @Autowired
    private RestService restService;


    @PostMapping(path = "/register")
    public ResponseEntity register(@RequestBody User user){
        return restService.register(user);
    }

    @PostMapping(path = "/login")
    public ResponseEntity login(@RequestBody User user){
        return restService.login(user);
    }

    @PostMapping(path = "/addBoard")
    public ResponseEntity addBoard(@RequestBody Board board){
        return restService.addBoard(board);
    }

    @GetMapping(path = "/getAllBoards")
    public List<Board> showBoards(){
        return restService.getAllBoards();
    }

    @DeleteMapping(path = "/deleteBoard")
    public ResponseEntity deleteBoard(@RequestBody int id){
        return restService.deleteBoard(id);
    }


}
