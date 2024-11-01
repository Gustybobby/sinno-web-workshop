"use client";

import type { CartItem } from "../types/cart.type";

export function getLocalCart(): CartItem[] {
  if (typeof localStorage === "undefined") {
    return [];
  }
  const localCartString = localStorage.getItem("cart") ?? "[]";
  const localCart: CartItem[] = JSON.parse(localCartString);
  return localCart;
}

export function addItemToLocalCart(item: CartItem): void {
  const localCart = getLocalCart();
  localCart.push(item);
  localStorage.setItem("cart", JSON.stringify(localCart));
}

export function removeItemFromLocalCart(idx: number): void {
  const localCart = getLocalCart();
  localStorage.setItem(
    "cart",
    JSON.stringify(localCart.filter((_, cartIdx) => cartIdx !== idx)),
  );
}
