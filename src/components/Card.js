import React from 'react';

function Card(props) {
    const weatherData = props.weatherData;

    return (
        <div className="card-overlay">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="/4102326_cloud_sun_sunny_weather_icon.png" alt="Card cap" />
                <div className="card-body">
                    {weatherData ? (
                        <div>
                            <h5 className="card-title">{weatherData.location.name.split(',')[0]}</h5>
                            <p className="card-text">
                                {`Avg Temp: ${weatherData.timelines.daily[0].values.temperatureAvg}°C`} <br />
                                {`Max Temp: ${weatherData.timelines.daily[0].values.temperatureMax}°C`} <br />
                                {`Min Temp: ${weatherData.timelines.daily[0].values.temperatureMin}°C`}
                            </p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
