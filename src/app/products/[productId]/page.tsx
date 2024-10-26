import { products } from "@/data/product";
import { notFound } from "next/navigation";
import ProductOptions from "@/components/ProductOptions";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = products.find((product) => product.id === Number(productId));
  if (!product) {
    notFound();
  }
  return (
    <main className="grid grid-cols-7 my-8">
      <Image
        src={product.image}
        alt="hoodie"
        width={1024}
        height={1024}
        className="w-full col-span-full px-4 lg:px-0 lg:col-start-2 lg:col-span-3"
      />
      <ProductOptions product={product} />
    </main>
  );
}
