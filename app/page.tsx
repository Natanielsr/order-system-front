// app/page.tsx
import ProductCard from '@/components/ProductCard';
import ProductList from '@/components/ProductList';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';


async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:5012/api/product', {
    // next: { revalidate: 3600 } // Opcional: atualiza o cache a cada 1 hora
    cache: 'no-store' // Use isso se os preços/estoque mudarem constantemente
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  // const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <main className="pt-10">

      {/* O Grid Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/*products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onClick={() => addToCart(p)}
          />
        ))*/}
      </div>
      <ProductList initialProducts={products}></ProductList>
    </main>
  );
}