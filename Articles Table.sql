CREATE TABLE Articles (
    article_id VARCHAR2(6)   NOT NULL,
    title VARCHAR(255),
    content TEXT,
    category_id VARCHAR2(6)   NOT NULL,
    author_id VARCHAR2(6)   NOT NULL,
    published_at TIMESTAMP,
PRIMARY KEY(article_id)
FOREIGN KEY(category_id) REFERENCES Categories(category_id)
FOREIGN KEY(author_id) REFERENCES Users(user_id)
);
