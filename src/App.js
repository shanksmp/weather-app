import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';

function App() {
    const [cityName, setCityName] = useState("Bangalore");
    const [weatherData, setWeatherData] = useState(null); // Store weather data here

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const baseUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;

    const fetchWeatherData = async (city) => {
        try {
            const url = `${baseUrl}?location=${city}&apikey=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setWeatherData(data);
            console.log("Weather data:", data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSearch = (city) => {
        fetchWeatherData(city); // Fetch data when the search button is clicked
    };

    return (
        <div className="App">
            <Navbar cityName={cityName} setCityName={setCityName} onSearch={handleSearch} />
            <Body cityName={cityName} weatherData={weatherData} /> {/* Pass weatherData to Body */}
        </div>
    );
}

export default App;
