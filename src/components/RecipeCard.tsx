
import { Link } from "react-router-dom";
import type { Meal } from "../types";
import { useFavorites } from "../context/FavoritesContext";

interface RecipeCardProps {
  meal: Meal;
}

function RecipeCard({ meal }: RecipeCardProps) {
    const {
    isFavorite,
    addFavorite,
    removeFavorite,
  } = useFavorites();

  const favorite = isFavorite(meal.idMeal);

  function handleFavoriteClick() {
    if (favorite) {
      removeFavorite(meal.idMeal);
    } else {
      addFavorite(meal.idMeal);
    }
}
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${meal.idMeal}`}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="recipe-image"
        />

        <div className="recipe-card-content">
          <h3>{meal.strMeal}</h3>
          <span>View Recipe →</span>
        </div>
      </Link>
       <button
        type="button"
        className={`favorite-button ${favorite ? "is-favorite" : ""}`}
        onClick={handleFavoriteClick}
      >
        {favorite ? "♥ Remove Favorite" : "♡ Add to Favorites"}
      </button>
    </div>
  );
}

export default RecipeCard;
