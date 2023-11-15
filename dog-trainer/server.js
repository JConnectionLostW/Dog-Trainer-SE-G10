
const express = require('express');
const mysql = require('mysql2');//added mysql path 
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "test_db",
})

app.use(cors());
app.use(express.json());

    app.get('/api/create', (req, res) => {
        const searchTerm = req.query.search || '';
        const query = `SELECT * FROM dog_breeds WHERE breed_name LIKE '%${searchTerm}%'`;

        db.query(query, (err, results) => {
            if (err){
                console.log(err);
                res.status(500).json({error: 'Internal Server Error'});
            } else {res.json(results);
        }
    });
})
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

//run server on test port
app.listen(PORT, () => console.log('API is running on port ${PORT}'));