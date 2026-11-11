
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { MealDetailsResponse } from "../types";

function RecipeDetails() {
  const { recipeId } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch<MealDetailsResponse>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  const recipe = data?.meals?.[0];

  const ingredients = recipe
    ? Array.from({ length: 20 }, (_, index) => {
        const ingredient = recipe[`strIngredient${index + 1}`]?.trim();
        const measure = recipe[`strMeasure${index + 1}`]?.trim();

        return { ingredient, measure };
      }).filter((item) => item.ingredient)
    : [];

  if (loading) {
    return <p className="details-message">Loading recipe...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!recipe) {
    return <p className="details-message">Recipe not found.</p>;
  }

  return (
    <main className="recipe-details-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="recipe-details-header">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="details-image"
        />

        <div className="recipe-details-info">
          <h1>{recipe.strMeal}</h1>

          <p>
            <strong>Category:</strong> {recipe.strCategory}
          </p>

          <p>
            <strong>Cuisine:</strong> {recipe.strArea}
          </p>

          <Link
            to={`/category/${encodeURIComponent(recipe.strCategory)}`}
            className="details-category-link"
          >
            Explore {recipe.strCategory} recipes
          </Link>
        </div>
      </div>

      <section className="ingredients-section">
        <h2>Ingredients</h2>

        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.ingredient} - {item.measure || "As needed"}
            </li>
          ))}
        </ul>
      </section>

      <section className="instructions-section">
        <h2>Cooking Instructions</h2>

        <p>{recipe.strInstructions}</p>
      </section>

      {recipe.strYoutube && (
        <section className="youtube-section">
          <h2>Video Tutorial</h2>

          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube →
          </a>
        </section>
      )}
    </main>
  );
}

export default RecipeDetails;
