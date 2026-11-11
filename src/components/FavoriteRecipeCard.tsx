
import useFetch from "../hooks/useFetch";
import type { MealDetailsResponse } from "../types";
import RecipeCard from "./RecipeCard";

interface FavoriteRecipeCardProps {
  recipeId: string;
}

function FavoriteRecipeCard({
  recipeId,
}: FavoriteRecipeCardProps) {
  const { data, loading, error } = useFetch<MealDetailsResponse>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  const recipe = data?.meals?.[0];

  if (loading) {
    return <p>Loading favorite recipe...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return <RecipeCard meal={recipe} />;
}

export default FavoriteRecipeCard;
