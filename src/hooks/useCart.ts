"use client";

import type { CartItem } from "@/types/cart.type";
import { getLocalCart } from "@/helpers/cart";
import { useEffect, useRef, useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>();
  const refreshCartRef = useRef(() => setCartItems(getLocalCart()));

  useEffect(() => {
    setCartItems(getLocalCart());
  }, []);

  return {
    cartItems,
    setCartItems,
    refreshCart: refreshCartRef.current,
  };
}
