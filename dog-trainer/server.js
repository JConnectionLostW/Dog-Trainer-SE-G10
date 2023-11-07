// this creates a local api to fetch a user token
// it then calls the api from login and renders it
// after successful retrieval of token
// 

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
    database: "pawsonaltrainer",
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



//create listening path and callback function
// that runs when serving the path
//app.use('/login', (req, res) => {
//    res.send({
//        //token being returned as JSON object
//        token: 'test123'
//    });
//});

//run server on test port
app.listen(8080, () => console.log('API is running on http://localhost:8080/create'));