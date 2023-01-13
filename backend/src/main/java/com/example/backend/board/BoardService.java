package com.example.backend.board;

import com.example.backend.task.Task;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BoardService {
    public ResponseEntity addTask(Task task);
    public ResponseEntity deleteTask(int id);
    public List<Task> getAllTasks(int boardId);
    public ResponseEntity deleteAllTasks();
    public ResponseEntity editTaskContent(Task task);

}
