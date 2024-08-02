import React from 'react';

function Card() {
    return (
        <div className="card-overlay">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="/4102326_cloud_sun_sunny_weather_icon.png" alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default Card;
