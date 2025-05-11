CREATE TABLE Events (
    event_id VARCHAR2(6)  NOT NULL,
    title VARCHAR(255),
    description TEXT,
    start_time DATETIME,
    end_time DATETIME,
    host_id VARCHAR2(6)   NOT NULL,
    location VARCHAR(255),
PRIMARY KEY(event_id)
FOREIGN KEY(host_id) REFERENCES Users(user_id)
);
