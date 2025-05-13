import express from "express";
import pool from "../db.js";

const router = express.Router();

// POST - Add new question to PostgreSQL
router.post("/", async (req, res) => {
  const { text, domain } = req.body;

  if (!text || !domain) {
    return res.status(400).json({ message: "Both text and domain are required." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO questions (text, domain) VALUES ($1, $2) RETURNING *",
      [text, domain]
    );

    res.status(201).json({
      message: "Question added to database.",
      question: result.rows[0]
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error." });
  }
});

export default router;