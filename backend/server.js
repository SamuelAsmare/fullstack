const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');
const app = express();
// app.use(cors({
//   origin: 'https://samfulldep.netlify.app', // Your frontend URL
// }));

 app.use(cors()); // 👈 allow requests from other origins
app.use(express.json());

const db = mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user: "sql3771460",
    password: "NRSX3pB3D4",
    database: "sql3771460"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('✅ Connected to MySQL database');
});

app.post('/users', (req, res) => {
    const { name, email, phone } = req.body;
    const query = "INSERT INTO worknow (name, email, ophone) VALUES (?, ?, ?)";
    db.query(query, [name, email, phone], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: "✅ Data inserted successfully" });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


