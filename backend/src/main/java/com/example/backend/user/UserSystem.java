package com.example.backend.user;


import com.example.backend.board.Board;
import com.example.backend.board.BoardRepo;
import com.example.backend.connector.Connector;
import com.example.backend.connector.ConnectorRepo;
import com.example.backend.rest.RestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class UserSystem implements RestService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private BoardRepo boardRepo;
    @Autowired
    private ConnectorRepo connectorRepo;

    private static User loginUser = new User();

    @Override
    public ResponseEntity register(User user) {
        boolean UserExist = userRepo.findByUsername(user.getUsername()).isPresent();
        if (UserExist){
            ResponseEntity.badRequest().body(String.format("user %s already exist",user.getUsername()));
            return ResponseEntity.badRequest().body("{\"message\":\"user already exist\"}");
        }
        userRepo.save(user);
        return ResponseEntity.ok().body("{\"message\":\"user added\"}");
    }

    @Override
    public ResponseEntity login(User user) {
        if (userRepo.findByUsername(user.getUsername()).isPresent()){
            if(userRepo.findByUsername(user.getUsername()).get().getPassword().equals(user.getPassword())){
                user.setLogged(true);
                loginUser = user;
                return ResponseEntity.ok().body("{\"message\":\"you are logged in\"}");
            }
            return ResponseEntity.badRequest().body("{\"message\":\"password incorrect\"}");
        }
        return ResponseEntity.badRequest().body("{\"message\":\"username incorrect\"}");
    }

    @Override
    public ResponseEntity addBoard(Board board) {
        boardRepo.save(board);
        Connector connector = new Connector(userRepo.findByUsername(loginUser.getUsername()).get(),board);
        connectorRepo.save(connector);
        return ResponseEntity.ok().body("{\"message\":\"board has been added\"}");
    }

    @Override
    public List<Board> getAllBoards() {
        List<Connector> connectors = connectorRepo.findAllByUser(userRepo.findByUsername(loginUser.getUsername()).get());
        List<Board> boards = new ArrayList();
        for(int i=0; i<connectors.size(); i++){
            boards.add(connectors.get(i ).getBoard());
        }
        return boards;
    }

    @Override
    public ResponseEntity deleteBoard(int id) {
        System.out.println();
        boardRepo.delete(boardRepo.findById(id).get());
        return ResponseEntity.ok().build();
    }
}
