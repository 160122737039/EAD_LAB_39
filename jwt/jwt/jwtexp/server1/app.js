const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const SECRET_KEY = process.env.SECRET_KEY;
const PORT = process.env.PORT || 4000;
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION || '1h';

app.use(express.json());

// Route to generate a JWT token
app.post('/login', (req, res) => {
    const user = { id: 1, username: 'userFromServer1' };

    // Sign the JWT token with secret key
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });

    res.json({ token });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server 1 running on http://localhost:${PORT}`);
});
