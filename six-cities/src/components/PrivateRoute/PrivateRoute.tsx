import { type FC, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    // Пока пользователь всегда не авторизован
    const isAuthenticated = true;

    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
