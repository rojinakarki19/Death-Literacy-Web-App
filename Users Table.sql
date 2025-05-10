CREATE TABLE Users (
    user_id  VARCHAR2(6)  NOT NULL,
    name VARCHAR(100),
    email VARCHAR(150) ,
    password VARCHAR(255),
PRIMARY KEY(user_id));