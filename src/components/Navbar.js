import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Mode from '../components/Mode.js';

function Navbar(props) {
    const getCityName = (event) => {
        event.preventDefault(); // Prevent the form from submitting
        props.onSearch(event); // Pass the event object to the onSearch function
    };
    
    const cityNameOnChange = (event) => {
        props.setCityName(event.target.value); // Update the state with the current input value
    };

    return (
        <div>
            <nav className={`navbar navbar-expand-lg `}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/favicon-32x32.png" alt="Logo Here" /> SkySnap
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Offer</a>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={getCityName}>
                            <input
                                className="form-control me-2"
                                type="search"
                                id="cityName"
                                placeholder="City Name"
                                aria-label="Search"
                                value={props.cityName}
                                onChange={cityNameOnChange}
                            />
                            <button className="btn btn-outline-success" id="searchCity" type="submit">Search</button>
                        </form>
                        <Mode />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
