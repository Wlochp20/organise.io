package com.example.backend.task;

import com.example.backend.board.Board;
import com.example.backend.board.BoardRepo;
import com.example.backend.board.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import java.util.List;

@Service
public class TaskSystem implements BoardService {
    @Autowired
    private TaskRepo taskRepo;
    @Autowired
    private BoardRepo boardRepo;


    @Override
    public ResponseEntity addTask(Task task) {
        taskRepo.save(task);
        return ResponseEntity.ok().body("task has been added");
    }

    @Override
    public ResponseEntity deleteTask(int id) {
        taskRepo.delete(taskRepo.findById(id).get());
        return ResponseEntity.ok().body("task has been deleted");
    }

    @Override
    public List<Task> getAllTasks(int boardId) {
        System.out.println(boardRepo.findById(boardId).get().getTasks());
        return null;
    }

    @Override
    public ResponseEntity deleteAllTasks() {
        taskRepo.deleteAll();
        return ResponseEntity.ok().body("all tasks deleted");
    }

    @Override
    public ResponseEntity editTaskContent(Task task) {
        taskRepo.findById(task.getId()).get().setContent(task.getContent());
        taskRepo.findById(task.getId()).get().setTitle(task.getTitle());
        return ResponseEntity.ok().body("task has been changed");

    }
}
