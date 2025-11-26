/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const trimmedQuery = query.trim();

      if (trimmedQuery === "") {
        router.push("/recipes");
      } else {
        router.push(`/recipes?search=${trimmedQuery}`);
      }
    }, 500);

    if (query) setLoading(true);

    return () => clearTimeout(timer);
  }, [query, router]);

  return (
    <div className="flex flex-col gap-2 my-8 w-full">
      <div className="relative md:w-xl md:mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="border border-orange-600 px-3 w-full bg-white rounded-full py-3"
        />

        {/* Loading indicator */}
        <div className="w-10 h-10 rounded-full bg-orange-600 flex justify-center items-center text-white absolute top-1 right-2">
          {loading ? <Loader2 className="w-6 h-6 animate-spin text-white" /> : <Search />}
        </div>
      </div>
    </div>
  );
}
