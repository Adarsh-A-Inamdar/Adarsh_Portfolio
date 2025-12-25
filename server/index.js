const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    // Here you would typically send an email using nodemailer or similar
    res.status(200).json({ success: true, message: 'Message received' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
