package com.example.backend.connector;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class ConnectorKey implements Serializable {
    @Column(name = "board_id")
    private int boardId;
    @Column(name = "user_id")
    private int userId;

}
