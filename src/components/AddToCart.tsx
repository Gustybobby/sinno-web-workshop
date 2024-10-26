"use client";

import type { Product } from "@/types/product.type";
import { addItemToLocalCart } from "@/helpers/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddToCart({
  product,
  selectedVariant,
}: {
  product: Product;
  selectedVariant: string | undefined;
}) {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const router = useRouter();
  return (
    <button
      className="font-semibold p-3 rounded-lg border text-white transition-colors bg-black hover:bg-black/80 disabled:bg-gray-400 disabled:border-bg-gray-500 disabled:cursor-not-allowed "
      disabled={(!selectedVariant && !!product.variants.length) || isAdded}
      onClick={(e) => {
        const button = e.target as HTMLButtonElement;
        button.disabled = true;
        addItemToLocalCart({ productId: product.id, variant: selectedVariant });
        console.log(
          `added product ${product.id} variant ${selectedVariant} to cart`,
        );
        button.disabled = false;
        setIsAdded(true);
        setTimeout(() => {
          window.dispatchEvent(new Event("update_cart"));
          router.push("/");
        }, 300);
      }}
    >
      {isAdded ? "Item added" : "Add to cart"}
    </button>
  );
}
