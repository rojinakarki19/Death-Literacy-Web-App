CREATE TABLE Registrations (
    registration_id VARCHAR2(6)  NOT NULL,
    user_id VARCHAR2(6)   NOT NULL,
    event_id VARCHAR2(6)   NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(registration_id)
FOREIGN KEY(user_id) REFERENCES Users(user_id)
FOREIGN KEY(event_id) REFERENCES Events(event_id)
);