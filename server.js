const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Load user data from JSON file (replace this with a database in a production environment)
let userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

// API to handle user login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists and the password matches (replace with proper authentication logic)
    const user = userData.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Login failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
