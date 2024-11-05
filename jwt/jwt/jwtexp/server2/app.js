const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const SECRET_KEY = process.env.SECRET_KEY;
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Middleware to verify the JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // No token provided

    // Verify the token with the secret key
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = user;
        next();
    });
}

// Protected route that requires a valid token
app.get('/protected', authenticateToken, (req, res) => {
    res.send(`Hello ${req.user.username}, this is Server 2!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server 2 running on http://localhost:${PORT}`);
});
