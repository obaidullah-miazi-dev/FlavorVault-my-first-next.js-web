"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Flame } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function ManageRecipesPage() {
  const { data: session } = useSession();

  const { data: myRecipes = [], refetch } = useQuery({
    queryKey: ["myRecipes", session?.user?.email],
    queryFn: async () => {
      if (!session?.user?.email) return [];
      const res = await fetch(
        `https://flavorvault-server.vercel.app/recipes?email=${session.user.email}`
      );
      return res.json();
    },
    enabled: !!session?.user?.email,
  });

  const handleDelete = async (id) => {
    const res = await fetch(
      `https://flavorvault-server.vercel.app/deleteRecipe/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(res.ok);
    if (res.ok) {
      refetch();
      alert("deleted successfully");
    } else {
      alert("operation failed");
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">
        Please log in to manage your recipes.
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center md:text-left mb-12">
          <h1 className="text-5xl md:text-6xl text-center font-extrabold text-gray-800 mb-4">
            My Recipes
          </h1>
          <p className="text-xl text-gray-600 text-center">
            You have created{" "}
            <span className="font-bold text-orange-600">
              {myRecipes.length}
            </span>{" "}
            delicious recipe{myRecipes.length !== 1 && "s"}
          </p>
        </div>

        {/* Empty State */}
        {myRecipes.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-xl border-2 border-dashed border-gray-200">
            <div className="text-7xl mb-6">No recipes yet</div>
            <p className="text-2xl text-gray-500 mb-10">
              Time to share your culinary magic!
            </p>
            <Link
              href="/addRecipes"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-4 px-10 rounded-full transition transform hover:scale-105 shadow-lg"
            >
              Add Your First Recipe
            </Link>
          </div>
        ) : (
          /* Recipe Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {myRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-2">
                      {recipe.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {recipe.shortDescription}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 text-sm">
                    {/* Difficulty Badge */}
                    <span
                      className={`px-4 py-1.5 rounded-full font-medium ${
                        recipe.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : recipe.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {recipe.difficulty || "Medium"}
                    </span>

                    {/* Cook Time */}
                    {recipe.cookTime && (
                      <span className="flex items-center gap-1.5 text-gray-700">
                        <Clock size={16} />
                        {recipe.cookTime}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <Link
                      href={`/recipes/${recipe._id}`}
                      className="flex-1 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl text-center transition shadow-md"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => handleDelete(recipe._id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
