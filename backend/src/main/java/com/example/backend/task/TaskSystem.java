package com.example.backend.task;

import com.example.backend.board.BoardRepo;
import com.example.backend.board.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskSystem implements BoardService {
    @Autowired
    private TaskRepo taskRepo;
    @Autowired
    private BoardRepo boardRepo;


    @Override
    public ResponseEntity addTask(Task task) {
        task.setBoard(boardRepo.findById(task.getBoardID()).get());
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
        List<Task> tasks= new ArrayList();
        tasks.addAll(boardRepo.findById(boardId).get().getTasks());
        return tasks;
    }

    @Override
    public ResponseEntity deleteAllTasks() {
        taskRepo.deleteAll();
        return ResponseEntity.ok().body("all tasks deleted");
    }


}
