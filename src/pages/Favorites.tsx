
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import FavoriteRecipeCard from "../components/FavoriteRecipeCard";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="favorites-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <section className="favorites-header">
        <h1>My Favorite Recipes</h1>
        <p>
          Your saved recipes are all in one place.
        </p>
      </section>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>No Favorite Recipes Yet</h2>
          <p>
            You haven't saved any recipes. Explore recipes
            and click the Add to Favorites button.
          </p>

          <Link to="/" className="explore-button">
            Explore Recipes
          </Link>
        </div>
      ) : (
        <>
          <h2 className="favorites-count">
            Saved Recipes ({favorites.length})
          </h2>

          <div className="recipe-grid">
            {favorites.map((recipeId) => (
              <FavoriteRecipeCard
                key={recipeId}
                recipeId={recipeId}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default Favorites;
