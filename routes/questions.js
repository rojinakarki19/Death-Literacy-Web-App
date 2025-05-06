import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../data/questions.json");

// PUT - update a question by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text, domain } = req.body;

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const index = data.findIndex(q => q.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Question not found." });
  }

  if (text) data[index].text = text;
  if (domain) data[index].domain = domain;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "Question updated successfully.", question: data[index] });
});

export default router;
