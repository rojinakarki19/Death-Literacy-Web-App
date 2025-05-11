CREATE TABLE QuizQuestions (
    question_id VARCHAR2(6)   NOT NULL,
    quiz_id VARCHAR2(6)   NOT NULL,
    question_text TEXT,
    correct_answer VARCHAR(255),
PRIMARY KEY(question_id)
FOREIGN KEY(quiz_id) REFERENCES Quizzes(quiz_id)
);
