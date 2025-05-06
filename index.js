import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import questionRoutes from "./routes/questions.js";
import scoreRoutes from "./routes/scores.js";
import pool from './db/db.js';

const app = express();
const port = process.env.PORT || 4000;  // ← better for deployment

app.use(bodyParser.json());

app.use("/questions", questionRoutes);
app.use("/save-scores", scoreRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to DB:', res.rows);
  }
});
