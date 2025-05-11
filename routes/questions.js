import express from "express";
import pool from "../db/db.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { text, domain } = req.body;

  console.log("✅ PUT /questions/:id");
  console.log("Request body:", req.body);

  if (!text || !domain) {
    console.log("❌ Missing text or domain");
    return res.status(400).json({ message: "Both text and domain are required." });
  }

  try {
    const categoryRes = await pool.query(
      "SELECT id FROM categories WHERE name = $1",
      [domain]
    );

    console.log("Category result:", categoryRes.rows);

    if (categoryRes.rows.length === 0) {
      return res.status(404).json({ message: "Category not found." });
    }

    const categoryId = categoryRes.rows[0].id;

    const result = await pool.query(
      `UPDATE questions
       SET question_text = $1,
           category_id = $2
       WHERE id = $3
       RETURNING *`,
      [text, categoryId, id]
    );

    console.log("Update result:", result.rows);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Question not found." });
    }

    res.json({ message: "✅ Question updated.", question: result.rows[0] });

  } catch (err) {
    console.error("❌ Database error:", err.stack);
    res.status(500).json({ message: "Database error during update.", error: err.message });
  }
});

export default router;
