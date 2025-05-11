CREATE TABLE UserAnswers (
    answer_id VARCHAR2(6)  NOT NULL,
    user_id VARCHAR2(6)   NOT NULL,
    question_id VARCHAR2(6)   NOT NULL,
    user_answer VARCHAR(255),
    is_correct BOOLEAN,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(answer_id)
FOREIGN KEY(user_id) REFERENCES Users(user_id)
FOREIGN KEY(question_id) REFERENCES QuizQuestions(question_id)
);
