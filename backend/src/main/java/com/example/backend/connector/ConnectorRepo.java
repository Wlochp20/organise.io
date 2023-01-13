package com.example.backend.connector;

import com.example.backend.board.Board;
import com.example.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ConnectorRepo extends JpaRepository<Connector,ConnectorKey> {
    Optional<Connector> findById(int id);
    public List<Connector> findAllByUser(User user);
}
