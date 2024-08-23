import React from 'react';
import '../css/body.css';
import Card from './Card';

function Body(props) {
    return (
        <div className='dataDisplay'>
            <section id="weather-data">
                <img src="/weather3.jpg" alt="Purple-Sky-Photo" />
                <div className="text-overlay">
                    <h1 className="cityName">{props.cityName}</h1>
                    <p className="date">Monday, May 23</p>
                    <p className="update-time">Update As Of 2:45 PM</p>
                </div>
                <Card weatherData={props.weatherData} /> {/* Pass weatherData to Card */}
            </section>
        </div>
    );
}

export default Body;
