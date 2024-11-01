"use client";

import type { CartItem } from "@/types/cart.type";
import { useEffect, useState } from "react";
import { getLocalCart } from "@/helpers/cart";

export default function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>();

  useEffect(() => {
    setCartItems(getLocalCart());
    window.addEventListener("update_cart", () => setCartItems(getLocalCart()));
  }, []);

  return {
    cartItems,
    setCartItems,
  };
}
