import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedin } = useContext(AppContext);

    if (!isLoggedin) {
        return <Navigate to="/" />; // Redirect to login if not authenticated
    }

    return children; // Render the component if authenticated
};

export default ProtectedRoute;
