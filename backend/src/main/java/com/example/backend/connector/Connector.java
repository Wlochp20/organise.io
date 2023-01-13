package com.example.backend.connector;

import com.example.backend.board.Board;
import com.example.backend.user.User;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;


import javax.persistence.*;

@Entity
public class Connector {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @Cascade(CascadeType.SAVE_UPDATE)
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @Cascade(CascadeType.SAVE_UPDATE)
    @JoinColumn(name = "board_id")
    Board board;


    public Connector(User user, Board board) {
        this.user = user;
        this.board = board;
    }

    public Connector() {
    }

    public User getUser() {
        return user;
    }

    public Board getBoard() {
        return board;
    }
}
