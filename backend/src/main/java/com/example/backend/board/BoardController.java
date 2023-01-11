package com.example.backend.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
    @Autowired
    private BoardService boardService;
    @PostMapping
    public ResponseEntity addBoard(@RequestBody Board board){
        return boardService.addBoard(board);
    }
}
