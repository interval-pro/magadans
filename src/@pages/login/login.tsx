import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GridBoxComponent } from '../../@shared/components/grid-box/grid-box';
import { FaEye, FaEyeSlash, FaBackward } from 'react-icons/fa';
import './login.scss';

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPassHidden, setIsPassHidden] = useState(true);

    const login = () => {
        setErrorMessage('');
        try {
            console.log(`Email: ${email}, Password: ${password}`);
            clearFields();
        } catch(error: any) {
            setErrorMessage(error.message)
        }
    }

    const clearFields = () => {
        setEmail('');
        setPassword('');
        setErrorMessage('');
    }

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <GridBoxComponent title='Login'>
                    <div className="inner-box">
                        <div className="input-field">
                            <span>Email: </span>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="input-field">
                            <span>Password: </span>
                            <input type={isPassHidden ? 'password' : 'text'} value={password} onChange={(e) => setPassword(e.target.value)} />
                            {
                            isPassHidden
                                ? <FaEyeSlash onClick={() => setIsPassHidden(false)} className="input-icon"/>
                                : <FaEye onClick={() => setIsPassHidden(true)} className="input-icon"/>
                            }
                        </div>
                        <button onClick={() => login()} disabled={!email || !password}>Login</button>
                        <div className="error-message">{ errorMessage }</div>
                    </div>
                </GridBoxComponent>
            </div>
            <div className="go-back" onClick={() => goHome()}><FaBackward />Back To Home Page</div>
        </div>
    );
};
