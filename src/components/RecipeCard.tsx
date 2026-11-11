
import { Link } from "react-router-dom";
import type { Meal } from "../types";

interface RecipeCardProps {
  meal: Meal;
}

function RecipeCard({ meal }: RecipeCardProps) {
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
    </div>
  );
}

export default RecipeCard;
