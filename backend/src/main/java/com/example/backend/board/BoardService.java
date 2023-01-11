package com.example.backend.board;

import com.example.backend.user.User;
import org.springframework.http.ResponseEntity;

public interface BoardService {
    public ResponseEntity addBoard(Board board);
}
