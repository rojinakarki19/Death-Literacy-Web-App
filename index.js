import express from "express";
import bodyParser from "body-parser";
import questionRoutes from "./routes/questions.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/questions", questionRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
