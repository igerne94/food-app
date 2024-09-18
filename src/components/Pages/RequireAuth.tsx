import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: ReactNode }) => { 
    const token = localStorage.getItem('jwt_token');
    if (!token) {
        return <Navigate to='authorization/login' replace />;
    }

    return children;
}
