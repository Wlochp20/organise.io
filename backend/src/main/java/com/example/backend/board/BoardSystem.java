package com.example.backend.board;

import com.example.backend.connector.Connector;
import com.example.backend.connector.ConnectorRepo;
import com.example.backend.user.User;
import com.example.backend.user.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class BoardSystem implements BoardService{
    @Autowired
    private BoardRepo boardRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ConnectorRepo connectorRepo;
    HttpServletRequest request;

    @Override
    public ResponseEntity addBoard(Board board) {
        String userek=request.getUserPrincipal().getName();
        User user = new User();
        userRepo.save(user);
        Connector connector = new Connector(user,board);
        boardRepo.save(board);
        connectorRepo.save(connector);
        return ResponseEntity.ok().build();
    }
}
