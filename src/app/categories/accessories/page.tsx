import { products } from "@/data/product";
import ProductDisplay from "@/components/ProductDisplay";

export default async function AccessoriesPage() {
  return (
    <main className="grid grid-cols-7 my-8 min-h-screen">
      <div className="grid gap-8 grid-cols-1 col-span-full px-4 md:px-0 md:grid-cols-3 md:col-start-2 md:col-span-5">
        {products
          .filter((product) => ["Wristbands"].includes(product.category))
          .map((product) => (
            <ProductDisplay key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
}
