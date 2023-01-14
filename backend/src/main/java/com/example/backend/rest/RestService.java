package com.example.backend.rest;

import com.example.backend.board.Board;
import com.example.backend.user.User;
import org.springframework.http.ResponseEntity;

import java.util.List;


public interface RestService {
    public ResponseEntity register(User user);
    public ResponseEntity login(User user);
    public ResponseEntity addBoard(Board board);
    public List<Board> getAllBoards();
    public ResponseEntity deleteBoard(int id);
}
