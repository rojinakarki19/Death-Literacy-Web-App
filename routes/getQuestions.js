import express from "express";
import pool from "../db/db.js";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Query to select all questions from the database
    const { rows } = await pool.query('SELECT * FROM questions');
    
    console.log('GET /questions - Successfully retrieved all questions');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({
      message: 'Error retrieving questions',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
