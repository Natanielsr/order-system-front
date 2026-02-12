"use client";

import { useAuth } from "@/context/AuthContext";
import { LogInIcon, LogOut } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";

export default function LoginStatus() {
    const { user, isAuthenticated, loading, logout } = useAuth();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            //router.push("/login");
        }
    }, [loading, isAuthenticated, router]);

    return <div className="flex">
        {isAuthenticated ? (
            <>
                <div className="flex items-center">
                    <span className="text-sm mr-2">
                        Olá, {user?.unique_name}
                    </span>
                </div>


                <button
                    onClick={logout}
                    className='flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors mr-2'>
                    <LogOut size={16} />
                    Sair
                </button>
            </>
        ) : (
            <Link href="/login">
                <button
                    className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors mr-2'>
                    <LogInIcon size={16} />
                    Login
                </button>
            </Link>
        )}
    </div>
}