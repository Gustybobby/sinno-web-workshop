"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const onSearch = () => {
    if (search === "") {
      router.push("/");
    } else {
      router.push("/?search=" + search);
    }
  };

  return (
    <div className="sm:flex items-center hidden mr-2">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 rounded-lg text-sm lg:w-80 border-gray-300 border"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <button
        className="-ml-9 size-9 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
        onClick={() => onSearch()}
      >
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}
