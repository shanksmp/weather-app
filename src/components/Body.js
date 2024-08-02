import React from 'react';
import '../css/body.css';
import Card from './Card';

function Body() {
    return (
        <div className='dataDisplay'>
            <section id="weather-data">
                <img src="/weather3.jpg" alt="Purple-Sky-Photo" />
                <div className="text-overlay">
                    <h1 className="cityName">San Francisco</h1>
                    <p className="date">Monday, May 23</p>
                    <p className="update-time">Update As Of 2:45 PM</p>
                </div>
                <Card />
            </section>
        </div>
    );
}

export default Body;
