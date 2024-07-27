import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        // Check localStorage for authentication status on initial load
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus) {
            setIsAuthenticated(true);
        }
    }, [isAuthenticated]);

    const logIn = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logOut = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}