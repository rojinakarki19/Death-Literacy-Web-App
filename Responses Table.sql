CREATE TABLE Responses (
	id   VARCHAR2(6) NOT NULL,
	user_id   VARCHAR2(6) NOT NULL,
	question_id   VARCHAR2(6)  NOT NULL,
	response_value  VARCHAR2(6),
	submitted_at  VARCHAR2(30),
PRIMARY KEY(id)
FOREIGN KEY(user_id) REFERENCES User(user_id)
FOREIGN KEY(question_id) REFERENCES Questions(question_id));