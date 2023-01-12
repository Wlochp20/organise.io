package com.example.backend.board;

import com.example.backend.connector.Connector;
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
    @OneToMany
    Set<TableClass> tableClasses;
    @OneToMany(mappedBy = "board")
    Set<Connector> connectors;

    public Board() {
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
