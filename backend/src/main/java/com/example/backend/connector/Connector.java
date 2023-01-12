package com.example.backend.connector;

import com.example.backend.board.Board;
import com.example.backend.user.User;

import javax.persistence.*;

@Entity
public class Connector {
    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @JoinColumn(name = "board_id")
    Board board;


    public Connector(User user, Board board) {
        this.user = user;
        this.board = board;
    }

    public Connector(Board board) {
        this.board = board;
    }

    public Connector() {
    }
}
