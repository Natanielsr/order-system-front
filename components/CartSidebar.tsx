import { formatCurrency } from "@/utils/format";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Button from "./Button";

export default function CartSidebar() {
    const { cart, addToCart, removeFromCart, total } = useCart();

    return (
        <div className="fixed top-12 right-0 w-32 h-full shadow-lg border-l border-l-gray-700 overflow-scroll">

            {cart.length === 0 ? <div className="py-5 px-2">Seu Carrinho está vázio</div> : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div className="ml-2">
                                <strong>{item.name}</strong>
                                <div style={{ fontSize: "14px", color: "#666" }}>
                                    {item.quantity}x {formatCurrency(item.price)}
                                </div>
                                <button onClick={() => removeFromCart(item.id)} style={{ color: "red", fontSize: "12px", cursor: "pointer" }}>
                                    Remover
                                </button>
                            </div>
                            <hr />
                        </div>

                    ))}
                    <div className="text-center bg-amber-300">
                        <span className="justify-center">
                            {formatCurrency(total)}
                        </span>
                    </div>
                    <div className="m-1">
                        <Link href="/cart">
                            <Button>Ir Para o Carrinho</Button>
                        </Link>
                    </div>

                </>
            )}
        </div>
    );
}