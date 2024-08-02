import React, { useState } from 'react';
import '../css/mode.css';

function Mode() {
    const [icon, setIcon] = useState('bi-moon');

    const changeMode = () => {
        if (icon === 'bi-moon') {
            setIcon('bi-brightness-high-fill');
            document.body.style.backgroundColor = '#212529';
            document.body.style.color = '#fff';
            document.querySelector('.navbar').classList.add('dark-mode'); // Add dark mode class
        } else {
            setIcon('bi-moon');
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#212529';
            document.querySelector('.navbar').classList.remove('dark-mode'); // Remove dark mode class
        }
    };

    return (
        <div>
            <button className="btn btn-primary" id="mode" type="button" onClick={changeMode}>
                <i className={`bi ${icon}`}></i>
            </button>
        </div>
    );
}

export default Mode;
