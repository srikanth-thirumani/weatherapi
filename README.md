# Weather App 🌤️

A simple, user-friendly weather application that provides real-time weather information for any city around the world using the OpenWeatherMap API.

## 📋 Features

- **City Search**: Look up weather data for any city globally
- **Current Conditions**: View temperature, feels-like temperature, humidity, and wind speed
- **Visual Indicators**: Weather icons representing current conditions
- **Responsive Design**: Works on both desktop and mobile devices



## 🚀 Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **API**: OpenWeatherMap
- **Dependencies**: 
  - axios (for HTTP requests)
  - dotenv (for environment variables)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/srikanth-thirumani/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your OpenWeatherMap API key:
```
PORT=3000
OPENWEATHERMAP_API_KEY=your_api_key_here
```

4. Start the application:
```bash
npm start
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## 💻 Development

For development with auto-restart on file changes:
```bash
npm run dev
```

## 📁 Project Structure

```
weather-app/
├── public/            # Static files
│   ├── index.html     # Main HTML file
│   ├── styles.css     # CSS styles
│   └── scripts.js     # Frontend JavaScript
├── server.js          # Express server and API routes
├── package.json       # Project dependencies
├── .env               # Environment variables (not tracked by git)
└── README.md          # Project documentation
```

## 🔑 API Key

This application uses the OpenWeatherMap API. You'll need to:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate an API key
3. Add the key to your `.env` file

## 🧰 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/weather?city=cityname | Fetches weather data for the specified city |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Your Name - [srikanth thirumani](mailto:srikanththirumani01@gmail.com)

Project Link: [https://github.com/srikanth-thirumani/weather-app](https://github.com/srikanth-thirumani/weather-app)
