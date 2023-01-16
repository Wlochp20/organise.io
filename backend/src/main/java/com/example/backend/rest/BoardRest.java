package com.example.backend.rest;

import com.example.backend.board.BoardService;
import com.example.backend.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
public class BoardRest {

    @Autowired
    private BoardService boardService;

    @PostMapping(path = "/addTask")
    public ResponseEntity addTask(@RequestBody Task task){
        return boardService.addTask(task);
    }

    @DeleteMapping(path = "/deleteTask")
    public ResponseEntity deleteTask(@RequestBody int id){
        return boardService.deleteTask(id);
    }

    @PostMapping(path = "/getAllTasks")
    public List<Task> getAllTasks(@RequestBody int boardId){
        return boardService.getAllTasks(boardId);
    }

    @DeleteMapping(path = "/deleteAllTasks")
    public ResponseEntity deleteAllTasks(){
        return boardService.deleteAllTasks();
    }

    @PostMapping(path = "/setStage")
    public ResponseEntity setStage(@RequestBody Task task){
        return boardService.setStage(task);
    }

}
