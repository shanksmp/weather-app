import React from 'react';
import '../css/body.css';
import Card from './Card';

function Body(props) {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if needed
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month and pad with leading zero
        const year = date.getFullYear(); // Get full year
    
        return `${day}/${month}/${year}`; // Format the date as dd/mm/yyyy
    }

    // Add a check to ensure weatherData and its properties are available
    const timelines = props.weatherData?.timelines;
    const daily = timelines?.daily;

    return (
        <div className='dataDisplay'>
            <section id="weather-data">
                <img src="/weather3.jpg" alt="Purple-Sky-Photo" />
                <div className="text-overlay">
                    <h1 className="cityName">Get Real-Time weather details</h1> {/* Display the searched city */}
                    {daily ? (
                        <>
                            <p className="date">{formatDate(daily[0].time.slice(0,10))}</p>
                            <p className="update-time">Update As Of {daily[0].time.slice(11,16)}</p>
                        </>
                    ) : (
                        <p>Loading weather data...</p>
                    )}
                </div>
                {props.weatherData && <Card weatherData={props.weatherData} />} {/* Pass weatherData to Card */}
            </section>
        </div>
    );
}

export default Body;
