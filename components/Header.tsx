import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';
import LoginStatus from './LoginStatus';

export default function Header() {

    const { totalItens } = useCart();

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className='flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white'>
                <Link href="/" className="text-lg font-bold">
                    <Button>Lojinha.com</Button>
                </Link>
                <div className='flex'>

                    <LoginStatus></LoginStatus>
                    <Link href="/cart">
                        <button
                            className='cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>
                            <ShoppingCart></ShoppingCart>
                            <span>Carrinho</span>
                            <span className=''>{totalItens}</span>
                        </button>
                    </Link>

                </div>
            </nav>
        </header >
    )
}