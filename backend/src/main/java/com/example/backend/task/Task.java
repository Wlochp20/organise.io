package com.example.backend.task;

import com.example.backend.board.Board;

import javax.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String content;
    private int boardID;
    @ManyToOne
    @JoinColumn(name="board_id", nullable=false)
    private Board board;

    public Task(String title, String content, int boardId) {
        this.title = title;
        this.content = content;
        this.boardID = boardId;
    }

    public Task(int id, String title, String content, int boardID) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.boardID = boardID;
    }

    public Task() {
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public int getBoardID() {
        return boardID;
    }

    public Task(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}
