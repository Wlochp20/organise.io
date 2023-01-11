package com.example.backend.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

    @PostMapping
    public ResponseEntity addBoard(){
        return ResponseEntity.ok().body("new board added");
    }
}
