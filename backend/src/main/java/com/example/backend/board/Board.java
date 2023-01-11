package com.example.backend.board;

import com.example.backend.table.TableClass;
import com.example.backend.user.User;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private int userId;
    @ManyToMany
    Set<User> user;
    @OneToMany
    Set<TableClass> tableClasses;


    public Board() {
    }

    public Board(String title, int userId) {
        this.title = title;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


}
