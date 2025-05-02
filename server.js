const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve quiz.html when user visits '/quiz'
app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'quiz.html'));
});

// Handle POST request to save scores
app.post('/save-scores', (req, res) => {
  const { averageScores, overallScore } = req.body;

  if (!averageScores || overallScore === undefined) {
    return res.status(400).json({ error: 'Missing averageScores or overallScore' });
  }

  const newEntry = {
    averageScores,
    overallScore,
    timestamp: new Date().toISOString()
  };

  const filePath = path.join(__dirname, 'scores.json');

  fs.readFile(filePath, 'utf8', (readErr, fileData) => {
    let data = [];
    if (!readErr && fileData) {
      try {
        data = JSON.parse(fileData);
      } catch (parseErr) {
        console.error('Error parsing scores.json:', parseErr);
      }
    }

    data.push(newEntry);

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to scores.json:', writeErr);
        return res.status(500).json({ error: 'Error saving scores' });
      }
      res.status(200).json({ message: 'Scores saved successfully' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
