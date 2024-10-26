import type { Product } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

export default function ProductDisplay({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Image
        src={product.image}
        alt="hoodie"
        width={1024}
        height={1024}
        className="w-full h-96"
      />
      <div className="flex justify-between p-2">
        <div>
          <h1 className="font-semibold">{product.name}</h1>
          <h2 className="text-gray-500 text-sm">{product.category}</h2>
        </div>
        <h2 className="text-gray-500">{product.price} ฿</h2>
      </div>
    </Link>
  );
}
