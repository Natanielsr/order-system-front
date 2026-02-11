'use client'

import { useState } from "react";
import CartSidebar from "./CartSidebar"
import Header from "./Header"

type AppProps = {
    children: React.ReactNode;
};

export default function App({ children }: AppProps) {
    const [hasCart, setHasCart] = useState(false);

    const toggleCart = () => setHasCart(!hasCart);

    return (
        <div>
            <div className={hasCart ? "mr-32 mt-12" : "mr-0 mt-12"}>
                <Header onToggle={toggleCart} />
                <main className="p-4">{children}</main>
            </div>
            {hasCart ? <CartSidebar /> : <></>}

        </div>
    )
}