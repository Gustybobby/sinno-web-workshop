"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "@/hooks/useCart";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const { cartItems, refreshCart } = useCart();

  useEffect(() => {
    window.addEventListener("update_cart", () => {
      refreshCart();
    });
  }, [refreshCart]);

  return (
    <header className="bg-gray-200 h-16 sticky top-0 backdrop-blur-sm bg-opacity-60 grid grid-cols-7">
      <div className="flex items-center justify-between col-start-1 col-span-full lg:col-start-2 lg:col-span-5 px-2 lg:px-0 h-full">
        <nav className="flex items-center h-full">
          <Link
            href="/"
            className="flex items-center font-extrabold text-lg mr-1 w-16 lg:text-2xl lg:w-fit lg:mr-8 leading-tight"
          >
            SINNO SHOP
          </Link>
          <div className="flex items-center h-full space-x-1 lg:space-x-4">
            <TabLink tab="All" href="/" pathname={pathname} />
            <TabLink tab="Wears" href="/categories/wears" pathname={pathname} />
            <TabLink
              tab="Accessories"
              href="/categories/accessories"
              pathname={pathname}
            />
          </div>
        </nav>
        <nav className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
          <SearchBar />
          <Link href="#">
            <FaRegUserCircle className="text-3xl" />
          </Link>
          <Link href="/cart">
            <div className="relative">
              <MdOutlineShoppingCart className="text-3xl" />
              {!!cartItems?.length && (
                <div className="bg-black text-white size-4 text-xs text-center rounded-full absolute -top-1 -right-1">
                  {cartItems?.length}
                </div>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function TabLink({
  pathname,
  tab,
  href,
}: {
  pathname: string;
  tab: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`h-full place-content-center hover:text-black border-b-4 transition-colors font-semibold px-1 py-4 sm:p-4 ${
        pathname === href
          ? "text-black border-black"
          : "text-gray-500 border-transparent"
      }`}
    >
      {tab}
    </Link>
  );
}
