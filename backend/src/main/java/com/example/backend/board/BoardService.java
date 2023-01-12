package com.example.backend.board;


import com.example.backend.user.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface BoardService {
    public ResponseEntity addBoard(Board board);
}
