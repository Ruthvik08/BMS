import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "raghu369.", // update this if needed
  database: "bms"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const created_at = new Date();

  console.log(`📥 Login Attempt: ${username}, ${password}`);

  const query = `INSERT INTO login_logs (username, password, created_at) VALUES (?, ?, ?)`;

  db.query(query, [username, password, created_at], (err, results) => {
    if (err) {
      console.error("❌ DB Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    console.log("✅ Login inserted into login_logs");
    res.json({ message: "Login successful!" });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
