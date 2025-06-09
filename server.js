
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 3000;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'varshini@9876V,.',
  database: 'login_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

 



app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const created_at=new Date();
  const query = `INSERT INTO users (username,password,created_at) values(?,?,?)`
  db.query(query, [username, password,created_at], (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
     res.json({ message: 'Registration successful!' });
   
    
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
