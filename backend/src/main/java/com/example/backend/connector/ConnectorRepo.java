package com.example.backend.connector;

import com.example.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConnectorRepo extends JpaRepository<Connector,ConnectorKey> {
}
