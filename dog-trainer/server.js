
const express = require('express');
const mysql = require('mysql2');//added mysql path 
const app = express();
//add bcrypt and jwt for encryption of password and creation of token respectively
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root66",
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
//start of changes
// Registration
app.post('/register', async (req, res) => {
  const { name, email, username, password } = req.body;

  // Store user information (refer to database for Customer before inserting
  db.query('INSERT INTO Customer (name, email) VALUES (?, ?, ?)', [name, email], (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Error registering user' });
    } else {
      const UserId = result.insertId;

      // Hash the password and store authentication credentials
      bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
        if (hashErr) {
          res.status(500).send({ error: 'Error hashing password' });
        } else {
        // reference database for Credential before insert(reminder)
          db.query('INSERT INTO credentials (CustId, username, password) VALUES (?, ?, ?)', [UserId, username, hashedPassword], (credErr) => {
            if (credErr) {
              res.status(500).send({ error: 'Error storing credentials' });
            } else {
              res.status(201).send({ message: 'User registered successfully' });
            }
          });
        }
      });
    }
  });
});

// Authentication
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Retrieve user credentials from the database
  //Refer to credentials in case errors occur(username, CustId, password, etc.)
  db.query('SELECT * FROM credentials WHERE username = ?', [username], async (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Error authenticating user' });
    } else if (results.length > 0) {
      const { CustId, password: hashedPassword } = results[0];

      // Compare passwords
      const match = await bcrypt.compare(password, hashedPassword);

      if (match) {
        // Generate JWT token
        const token = jwt.sign({ user_id, username }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).send({ token });
      } else {
        res.status(401).send({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).send({ error: 'User not found' });
    }
  });
});
//end of changes
//run server on test port
app.listen(PORT, () => console.log('API is running on port ${PORT}'));
