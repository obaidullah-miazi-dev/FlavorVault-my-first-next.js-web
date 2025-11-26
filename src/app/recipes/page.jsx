import RecipeCard from "@/components/RecipeCard";
import SearchBox from "@/components/SearchBox";

const Recipes = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";

  // console.log("Search:", search);
  const res = await fetch(`https://flavorvault-server.vercel.app/recipes?search=${search}`, {
    cache: "no-store",
  });
  const recipes = await res.json();

  return (
    <section className="py-16 px-4">
      <div className="w-10/12 mx-auto">
        <div className="text-center py-16 mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Discover Your Next
            <span className="text-orange-600"> Favorite Recipe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Thousands of tried-and-tested recipes, from quick weeknight dinners
            to show-stopping desserts.
          </p>

          <SearchBox defaultValue={search} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
