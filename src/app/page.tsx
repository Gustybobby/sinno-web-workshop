import { products } from "@/data/product";
import ProductDisplay from "@/components/ProductDisplay";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined }>;
}) {
  const { search } = await searchParams;
  return (
    <main className="grid grid-cols-7 my-8 min-h-screen">
      <div className="col-span-full px-4 md:px-0 md:col-start-2 md:col-span-5">
        {!!search && search !== "" && (
          <h1 className="mb-8 font-bold text-xl">
            Search results for {`'${search}'`}:
          </h1>
        )}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {products
            .filter(
              (product) =>
                !search ||
                product.name.includes(search) ||
                product.category.includes(search),
            )
            .map((product) => (
              <ProductDisplay key={product.id} product={product} />
            ))}
        </div>
      </div>
    </main>
  );
}
