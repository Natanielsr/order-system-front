'use client'

import { useState } from "react";
import CartSidebar from "./CartSidebar"
import Header from "./Header"
import React from "react";
import { useCart } from "@/context/CartContext";

type AppProps = {
    children: React.ReactNode;
};

export default function App({ children }: AppProps) {
    const { isOpen } = useCart();

    return (
        <div>
            <div className={isOpen ? "mr-32 mt-12" : "mr-0 mt-12"}>
                <Header />
                <main className="p-4">
                    {children}
                </main>
            </div>
            {isOpen ? <CartSidebar /> : <></>}

        </div>
    )
}