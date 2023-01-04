import { useState } from 'react';
import './left-side.scss';
import logo from '../../../@style/assets/logo.png';
import avatar from '../../../@style/assets/avatar.png';
import { useNavigate } from 'react-router-dom';

export const LeftSideComponent = () => {
    const isLoggedIn = false;
    const navigate = useNavigate();

    const goToLogin = () => navigate('/login');

    return (
        <div className="left-side">
            <div className="top-image">
                <img src={ isLoggedIn ? avatar : logo } />
            </div>
            {
                isLoggedIn ? 
                    <div className="logged-in">
                        <div className="info-container">
                            <div className="info-line">
                                <div className="key">Username:</div>
                                <div className="value">Valentin</div>
                            </div>
                            <div className="info-line">
                                <div className="key">Balance:</div>
                                <div className="value">400</div>
                            </div>
                            <div className="info-line">
                                <div className="key">Available:</div>
                                <div className="value">100</div>
                            </div>
                            <div className="info-line">
                                <div className="key">PNL:</div>
                                <div className="value">250</div>
                            </div>
                            <div className="info-line">
                                <div className="key">UPNL:</div>
                                <div className="value">100</div>
                            </div>
                        </div>
                        {/* <div 
                            className="logout-message"
                            onClick={() => goToHome()}
                        >
                            Logout
                        </div> */}
                    </div>
                : 
                    <div className="logged-out">
                        <div
                            className="login-message"
                            onClick={() => goToLogin()}
                        >
                            Click To Login
                        </div>
                    </div>
            }
        </div>
    )
}