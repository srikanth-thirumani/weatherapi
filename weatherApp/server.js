const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API endpoint to fetch weather data
app.get('/api/weather', async (req, res) => {
    try {
        const city = req.query.city;
        
        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }
        
        // Replace with your actual API key from OpenWeatherMap
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: 'City not found' });
        }
        
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});