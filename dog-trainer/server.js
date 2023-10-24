// this creates a local api to fetch a user token
// it then calls the api from login and renders it
// after successful retrieval of token
// 

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

//create listening path and callback function
// that runs when serving the path
app.use('/login', (req, res) => {
    res.send({
        //token being returned as JSON object
        token: 'test123'
    });
});

//run server on test port
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));