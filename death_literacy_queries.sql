--1. Articles Table
--Insert New Article:

INSERT INTO Articles (article_id, title, content, published_at)
VALUES ('A001', 'End-of-Life Planning', 'Content of the article goes here...', '2025-05-11');

--Get All Articles:

SELECT * FROM Articles;

--Update Article Content:

UPDATE Articles
SET content = 'Updated article content goes here...'
WHERE article_id = 'A001';

--Delete an Article:

DELETE FROM Articles
WHERE article_id = 'A001';


--2.Events Table 
--Insert New Event:

INSERT INTO Events (event_id, title, description, event_date)
VALUES ('E001', 'Palliative Care Workshop', 'Workshop on Palliative Care', '2025-06-01');

--Get All Events:

SELECT * FROM Events;

--Update Event Details:

UPDATE Events
SET title = 'Updated Event Title', description = 'Updated Event Description', event_date = '2025-07-01'
WHERE event_id = 'E001';

--Delete an Event:

DELETE FROM Events
WHERE event_id = 'E001';


--3. Quizzes Table
--Insert New Quiz:

INSERT INTO Quizzes (quiz_id, title, description, created_at)
VALUES ('Q001', 'End-of-Life Legal Knowledge', 'Quiz on legal aspects of end-of-life care', '2025-05-11');

--Get All Quizzes:

SELECT * FROM Quizzes;

--Update Quiz Details:

UPDATE Quizzes
SET title = 'Updated Quiz Title', description = 'Updated Description'
WHERE quiz_id = 'Q001';

--Delete a Quiz:

DELETE FROM Quizzes
WHERE quiz_id = 'Q001';

--4. Categories Table
--Insert New Category:

INSERT INTO Categories (category_id, category_name)
VALUES ('C001', 'Palliative Care');

--Get All Categories:

SELECT * FROM Categories;


--5. Comments Table
--Insert New Comment:

INSERT INTO Comments (comment_id, user_id, content, created_at, resource_id)
VALUES ('CM001', 'U001', 'This article is very insightful.', '2025-05-11', 'A001');

--Get All Comments for a Specific Resource (e.g., Article):

SELECT * FROM Comments
WHERE resource_id = 'A001';  -- Replace with the relevant resource ID (e.g., quiz, event)

--Delete a Comment:

DELETE FROM Comments
WHERE comment_id = 'CM001';

--6. Registrations Table
--Insert New Registration for an Event:

INSERT INTO Registrations (registration_id, user_id, event_id)
VALUES ('R001', 'U001', 'E001');

--Get All Registrations for a Specific Event:

SELECT * FROM Registrations
WHERE event_id = 'E001';

--7. UserAnswers Table
--Insert a User's Answer in a Quiz:

INSERT INTO UserAnswers (answer_id, user_id, quiz_id, question_id, answer_value)
VALUES ('UA001', 'U001', 'Q001', 'Q1', 'A');

--Get All Answers by a User:

SELECT * FROM UserAnswers
WHERE user_id = 'U001';

--8. Responses Table

--Insert a New Response:

INSERT INTO Responses (id, user_id, question_id, response_value, submitted_at)
VALUES ('R001', 'U001', 'Q001', 'Yes', '2025-05-11 12:30:00');

--Get All Responses for a Specific Question:

SELECT * FROM Responses
WHERE question_id = 'Q001';

--Get All Responses by a Specific User:

SELECT * FROM Responses
WHERE user_id = 'U001';

--9. Complex Select Queries
--Get Users Who Have Registered for Events:

SELECT r.registration_id, u.user_id, u.name, e.event_id, e.title
FROM Registrations r
JOIN Users u ON r.user_id = u.user_id
JOIN Events e ON r.event_id = e.event_id;

--Get All Questions with Their Related Quizzes:

SELECT q.quiz_id, q.title, qs.question_id, qs.text
FROM Quizzes q
JOIN Questions qs ON q.quiz_id = qs.quiz_id;

--Count the Number of Responses for Each Question:

SELECT question_id, COUNT(*) AS response_count
FROM Responses
GROUP BY question_id;




