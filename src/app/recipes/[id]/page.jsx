import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function RecipeDetails({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://flavorvault-server.vercel.app/recipes/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) return notFound();
  const recipe = await res.json();
  console.log(recipe);

  return (
    <div className="mt-12">
      {/* Recipe Header */}
      <div className="ml-38 px-6 pt-10">
        <Link
          href="/recipes"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mb-8"
        >
          <ArrowLeft size={20} />
          Back to Recipes
        </Link>
      </div>
      <div className="w-10/12 mx-auto px-6">
        {/* image  */}
        <div className="relative w-full md:min-h-[800] min-h-[300] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info Bar */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {recipe.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{recipe.fullDescription}</p>

          <div className="flex flex-wrap gap-6 text-gray-700 mb-10">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-orange-600" />
              <span className="font-medium">20–25 min</span>
            </div>
            <div className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              {recipe.difficulty}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pb-20 mt-18">
            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Instructions
              </h2>
              <ol className="space-y-6">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-orange-600">•</span>
                    <span className="text-lg">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
