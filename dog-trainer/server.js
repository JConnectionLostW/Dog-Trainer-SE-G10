
const express = require('express');
const mysql = require('mysql2');//added mysql path 
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root66",
    database: "test_db",
})

    app.post('/create', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        db.query('INSERT INTO user (username, password) VALUES (?,?)', 
        [username, password], (err, result) => {
            if (err){
                console.log(err);
            } else {res.send("val inserted");
        }
    });
})

//run server on test port
app.listen(8080, () => console.log('API is running on http://localhost:8080/create'));