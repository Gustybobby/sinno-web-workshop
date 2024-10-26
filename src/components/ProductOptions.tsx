"use client";

import type { Product } from "@/types/product.type";
import { useState } from "react";
import AddToCart from "./AddToCart";

export default function ProductOptions({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>();

  return (
    <section className="p-8 col-span-full col-start-1 lg:col-span-2 ">
      <h1 className="font-semibold text-4xl mb-4">{product.name}</h1>
      <h2 className="text-xl text-gray-500 mb-8">{product.price} ฿</h2>
      <div className="space-x-2 mb-8">
        {product.variants.map((variant) => (
          <button
            key={variant}
            className={`border border-gray-500 size-12 min-w-fit p-2 rounded-md font-semibold transition-colors ${
              selectedVariant === variant
                ? "bg-black text-white border-black"
                : "hover:bg-gray-200"
            }`}
            onClick={() =>
              setSelectedVariant((previousVarient) =>
                previousVarient === variant ? undefined : variant,
              )
            }
          >
            {variant}
          </button>
        ))}
      </div>
      <AddToCart product={product} selectedVariant={selectedVariant} />
    </section>
  );
}
