import './not-found.scss';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export const NotFoundComponent = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    }, []);
    return (
        <div className="not-found">
            <img></img>
            <span>Page Not Found</span>
        </div>
    );
};
