CREATE TABLE Comments (
    comment_id VARCHAR2(6)  NOT NULL,
    user_id VARCHAR2(6)   NOT NULL,
    article_id VARCHAR2(6)   NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(comment_id)
FOREIGN KEY(user_id) REFERENCES Users(user_id)
FOREIGN KEY(article_id) REFERENCES Articles(article_id)
);
