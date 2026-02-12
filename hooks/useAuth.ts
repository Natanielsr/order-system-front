"use client";

import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserClaims } from '@/types/auth';

const TOKEN_KEY = "user_token"

export function useAuth() {
    const [user, setUser] = useState<UserClaims | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);

        if (!token) {
            setLoading(false);
            return;
        }

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
        setLoading(false);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
        window.location.href = '/login';
    };

    return { user, isAuthenticated: !!user, loading, handleLogout };
}