
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { CategoryMealResponse } from "../types";
import RecipeCard from "../components/RecipeCard";

function Category() {
  const { categoryName } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch<CategoryMealResponse>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName ?? "")}`
  );

  return (
    <main className="category-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <h1>{categoryName} Recipes</h1>

      <p>Explore delicious {categoryName} recipes.</p>

      {loading && <p>Loading recipes...</p>}

      {error && (
        <p className="error-message">{error}</p>
      )}

      {!loading && !error && data?.meals === null && (
        <p>No recipes found in this category.</p>
      )}

      <div className="recipe-grid">
        {data?.meals?.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
          />
        ))}
      </div>
    </main>
  );
}

export default Category;
