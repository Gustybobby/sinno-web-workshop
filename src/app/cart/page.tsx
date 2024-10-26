"use client";

import { products } from "@/data/product";
import { removeItemFromLocalCart } from "@/helpers/cart";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, refreshCart } = useCart();

  if (!cartItems) {
    return <></>;
  }
  return (
    <main className="grid grid-cols-7 my-16 min-h-screen">
      <div className="col-start-2 col-span-5">
        {cartItems.length ? (
          <div>
            <h1 className="font-bold text-3xl mb-8">Your cart</h1>
            <div className="border-b border-gray-300" />
            {cartItems.map((item, idx) => {
              const product = products.find(
                (product) => product.id === item.productId,
              );
              if (!product) {
                throw new Error("invalid product in cart");
              }
              return (
                <div
                  key={idx}
                  className="border-b border-gray-300 p-4 flex justify-between"
                >
                  <div className="flex space-x-2">
                    <Image
                      src={product.image}
                      alt={"image of " + product.name}
                      width={512}
                      height={512}
                      className="size-36"
                    />
                    <div className="p-2 space-y-1">
                      <h2 className="font-semibold">{product.name}</h2>
                      <span className="text-sm">{product.category}</span>
                      <p className="text-sm">Variant: {item.variant ?? "-"}</p>
                    </div>
                  </div>
                  <div className="p-2 flex flex-col justify-between">
                    <span className="font-semibold">{product.price} ฿</span>
                    <button
                      className="text-sm text-gray-500 hover:underline"
                      onClick={() => {
                        removeItemFromLocalCart(idx);
                        refreshCart();
                        window.dispatchEvent(new Event("update_cart"));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-center mt-8">
              <button className="bg-black text-white py-4 px-12 rounded-md hover:bg-black/80 transition-colors font-semibold">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-bold text-3xl mb-4">Your cart is empty</h1>
            <p className="mb-16">Add something to your cart...</p>
            <Link
              href="/"
              className="bg-black text-white py-4 px-6 rounded-md hover:bg-black/80 transition-colors font-semibold"
            >
              See products
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
