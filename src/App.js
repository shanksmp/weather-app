import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';

function App() {
    const [cityName, setCityName] = useState("Bangalore");
    const [searchedCity, setSearchedCity] = useState("Bangalore"); // Initialize with the same default city
    const [weatherData, setWeatherData] = useState(null); // Store weather data here

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const baseUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;

    const fetchWeatherData = useCallback(async (city) => {
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
    }, [apiKey, baseUrl]);

    // Fetch weather data when the component mounts (initial page load)
    useEffect(() => {
        fetchWeatherData(searchedCity); // Fetch data for the initial city (e.g., Bangalore)
    }, [searchedCity, fetchWeatherData]);

    // Handler for the Search button click
    const handleSearch = (event) => {
        event.preventDefault(); // Prevents form submission from reloading the page
        setSearchedCity(cityName); // Update the searchedCity to trigger a new data fetch
    };

    return (
        <div className="App">
            <Navbar cityName={cityName} setCityName={setCityName} onSearch={handleSearch} />
            <Body cityName={searchedCity} weatherData={weatherData} /> {/* Pass searchedCity and weatherData to Body */}
        </div>
    );
}

export default App;
