"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddRecipeForm() {
  const router = useRouter();
  const [instructions, setInstructions] = useState([]);
  const [instructionInput, setInstructionInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");

  const addInstruction = (e) => {
    e.preventDefault();
    if (!instructionInput.trim()) return;
    setInstructions([...instructions, instructionInput]);
    setInstructionInput("");
  };

  const addIngredient = (e) => {
    e.preventDefault();
    if (!ingredientInput.trim()) return;
    setIngredients([...ingredients, ingredientInput]);
    setIngredientInput("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      difficulty: "Easy",
      ingredients: "",
      instructions: "",
    },
  });

  const onSubmit = async (data) => {
    const finalData = {
      ...data,
      instructions: instructions,
      ingredients: ingredients,
    };
    try {
      const res = await fetch(
        "https://flavorvault-server.vercel.app/addRecipe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        }
      );

      if (res.ok) {
        reset();
        router.push("/recipes");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Recipe Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to add recipe",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      Swal.fire({
          position: "center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
    }
  };

  return (
    <div className="md:w-8/12  mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Add New Recipe</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 md:flex justify-between gap-8"
      >
        <div className="flex-1 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Recipe Name
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500 focus:border-transparent"
              placeholder="Recipe Name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">
                Recipe Name is Required
              </p>
            )}
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Short Description
            </label>
            <input
              {...register("shortDescription", { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500"
              placeholder="One sentence summary"
            />
            {errors.shortDescription && (
              <p className="text-red-600 text-sm mt-1">
                Short Description is Required
              </p>
            )}
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Full Description
            </label>
            <textarea
              {...register("fullDescription", { required: true })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500"
              placeholder="Tell us more about this recipe..."
            />
            {errors.fullDescription && (
              <p className="text-red-600 text-sm mt-1">
                Full Description is Required
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              {...register("image", { required: true })}
              type="url"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500"
              placeholder="https://images.unsplash.com/..."
            />
            {errors.image && (
              <p className="text-red-600 text-sm mt-1">Image Url is Required</p>
            )}
          </div>

          {/* YOur Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              {...register("recipeMakerName", { required: true })}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500"
              placeholder="Your Name"
            />
            {errors.recipeMakerName && (
              <p className="text-red-600 text-sm mt-1">Name is Required</p>
            )}
          </div>
          {/* Your Email*/}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              {...register("recipeMakerEmail", { required: true })}
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500"
              placeholder="Your Email"
            />
            {errors.recipeMakerEmail && (
              <p className="text-red-600 text-sm mt-1">Email is Required</p>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {/* Difficulty */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              {...register("difficulty", { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            {errors.difficulty && (
              <p className="text-red-500 text-sm mt-1">
                Difficulty is Required
              </p>
            )}
          </div>

          {/* Cooking Time */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Cooking Time
            </label>
            <input
              {...register("cookTime", { required: true })}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-orange-500"
              placeholder="e.g. 20-30 Min"
            />
            {errors.cookTime && (
              <p className="text-red-600 text-sm mt-1">Cook Time is Required</p>
            )}
          </div>

          {/* Ingredients - one per line */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Add Ingredient
            </label>
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              placeholder="Add Ingredients"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 outline-none focus:ring-orange-500"
            />
            <button
              onClick={addIngredient}
              className="bg-green-600 text-white px-3 py-1 absolute right-2 top-11 rounded-lg"
            >
              Add Ingredient
            </button>

            <ol className="mt-3 list-decimal ml-5">
              {ingredients.map((ing, index) => (
                <li key={index} className="mb-1">
                  {ing}
                </li>
              ))}
            </ol>
          </div>

          {/* Instructions - one per line */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Add Instruction
            </label>
            <input
              type="text"
              value={instructionInput}
              onChange={(e) => setInstructionInput(e.target.value)}
              placeholder="Add step"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 outline-none focus:ring-orange-500"
            />
            <button
              onClick={addInstruction}
              className="bg-green-600 text-white px-3 py-1 absolute right-2 top-11 rounded-lg"
            >
              Add Step
            </button>

            <ol className="mt-3 list-decimal ml-5">
              {instructions.map((step, index) => (
                <li key={index} className="mb-1">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg transition disabled:opacity-70"
            >
              Add Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
