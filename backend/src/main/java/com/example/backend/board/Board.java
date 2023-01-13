package com.example.backend.board;

import com.example.backend.connector.Connector;
import com.example.backend.task.Task;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String[] users;
    @OneToMany
    Set<Task> tasks;
    @OneToMany(mappedBy = "board",cascade = CascadeType.ALL, orphanRemoval = true)
    Set<Connector> connectors;

    public Board(String title) {
        this.title = title;
    }

    public Board() {
    }

    public void setUsers(String[] users) {
        this.users = users;
    }

    public Set<Task> getTasks() {
        return tasks;
    }
}
