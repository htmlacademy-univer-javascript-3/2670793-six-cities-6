import { type FC, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector, selectAuthorizationStatus } from '../../store';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthenticated = authorizationStatus === 'AUTH';

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
