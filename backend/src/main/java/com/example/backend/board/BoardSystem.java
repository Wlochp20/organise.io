package com.example.backend.board;

import com.example.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class BoardSystem implements BoardService{
    @Autowired
    private BoardRepo boardRepo;
    @Override
    public ResponseEntity addBoard(Board board) {
        boardRepo.save(board);
        return null;
    }
}
