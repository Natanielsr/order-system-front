"use client";

import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserClaims } from '@/types/auth';

export function useAuth() {
    const [user, setUser] = useState<UserClaims | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('user_token');

        if (token) {
            try {
                const decoded = jwtDecode<UserClaims>(token);

                // Verifica se o token expirou
                const currentTime = Date.now() / 1000;
                if (decoded.exp < currentTime) {
                    console.warn("Token expirado");
                    handleLogout();
                } else {
                    setUser(decoded);
                }
            } catch (error) {
                console.error("Erro ao decodificar token:", error);
                handleLogout();
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        window.location.href = '/login';
    };

    return { user, isAuthenticated: !!user, handleLogout };
}