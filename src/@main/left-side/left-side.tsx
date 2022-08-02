import { useState } from 'react';
import './left-side.scss';

export const LeftSideComponent = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    return (
        <div className="left-side">
            <div className="image-container">
                <div className="image"></div>
                <div className="login-logout" onClick={() => setLoggedIn(!isLoggedIn)}>
                    { isLoggedIn === true ? "logout" : "login"}
                </div>
            </div>
            <div className="info-container">
                <div className="info-line">Name: Valentin</div>
                <div className="info-line">Balance: 400</div>
                <div className="info-line">Available: 100</div>
                <div className="info-line">PNL: 250</div>
                <div className="info-line">UPNL: 100</div>
            </div>
        </div>
    )
}