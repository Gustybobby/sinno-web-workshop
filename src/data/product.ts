import type { Product } from "@/types/product.type";

export const products: Product[] = [
  {
    id: 1,
    name: "White Hoodie",
    category: "Hoodies",
    price: 1000,
    image: "/product_images/hoodie.png",
    variants: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "White Shoes",
    category: "Shoes",
    price: 500,
    image: "/product_images/white_shoe.jpg",
    variants: ["39", "40", "42", "44"],
  },
  {
    id: 3,
    name: "Yellow Cap",
    category: "Caps",
    price: 300,
    image: "/product_images/yellow_hat.webp",
    variants: [],
  },
  {
    id: 4,
    name: "Red Socks",
    category: "Socks",
    price: 100,
    image: "/product_images/red_socks.jpg",
    variants: ["42", "44"],
  },
  {
    id: 5,
    name: "Blue Shoes",
    category: "Shoes",
    price: 1000,
    image: "/product_images/blue_shoe.jpg",
    variants: ["40", "42", "44"],
  },
  {
    id: 6,
    name: "Custom Wristband",
    category: "Wristbands",
    price: 200,
    image: "/product_images/wristband.jpg",
    variants: ["Red", "Green", "Yellow"],
  },
];
