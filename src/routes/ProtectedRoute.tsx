import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from 'hooks/useAuth'
import { REDIRECT_URL_QUERY_PARAM } from 'constants/index'

const ProtectedRoute: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();
    const { pathname } = location;

    if (!token) {
        return <Navigate to={`/sign-in?${REDIRECT_URL_QUERY_PARAM}=${pathname}`} replace />;
    }

    return <div>{children}</div>;
};

export default ProtectedRoute;