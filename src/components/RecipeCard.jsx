import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, ChefHat } from "lucide-react"; // Optional: use lucide-react icons
import Button from "./Button";

const difficultyColor = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const RecipeCard = ({ recipe }) => {
  const cookTime = recipe.cookTime || "30 min";
  const difficulty = recipe.difficulty || "Medium";

  return (
    <div className="group block">
      <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform  bg-white">
        {/* Image with overlay */}
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={recipe.image || "/placeholder-recipe.jpg"}
            alt={recipe.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          {/* Title on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold leading-tight drop-shadow-lg">
              {recipe.name}
            </h3>
            <p className="text-sm opacity-90 mt-1">{recipe.shortDescription}</p>
          </div>

          {/* Top-right badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              <Clock size={14} />
              {cookTime}
            </span>
            <span
              className={`text-xs px-3 py-1.5 rounded-full font-medium text-center ${
                difficultyColor[difficulty] || difficultyColor.Medium
              }`}
            >
              {difficulty}
            </span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-5 space-y-4">
          {/* Ingredients lists */}
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients?.slice(0, 4).map((ing, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {ing}
              </span>
            ))}
            {recipe.ingredients?.length > 4 && (
              <span className="text-xs text-gray-500">
                +{recipe.ingredients.length - 4} more
              </span>
            )}
          </div>

          {/* button */}
          <Link href={`/recipes/${recipe._id}`}>
            <Button className={`rounded-full`}>View Recipe</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
