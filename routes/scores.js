import express from "express";
import fs from "fs";

const router = express.Router();
const filePath = "./data/scores.json";

// POST - save quiz scores
router.post("/", (req, res) => {
  const data = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : [];

  const newScore = {
    id: Date.now(),
    ...req.body
  };

  data.push(newScore);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.json({ message: "Score saved successfully." });
});

export default router;
