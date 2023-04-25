import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Use body-parser middleware to parse JSON request body
app.use(bodyParser.json());

app.post('/api/agents/silaslenihan/example-agent', async (req, res) => {
    const url = 'https://app.fixie.ai/api/agents/silaslenihan/example-agent';
    const token = process.env.FIXIE_API_TOKEN;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(req.body),
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        res.json(data.message.text);
    } catch (error) {
        console.error('Error calling API:', error);
        res.status(500).json({ error: 'Error calling API' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
