import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/submit", (req, res) => {
  const { email, password } = req.body;

  if (email === "sample@gmail.com" && password === "coding") {
    res.send("<h1>Your Password is correct</h1>");
  } else {
    res.send("<h1>Wrong password or id</h1>");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
