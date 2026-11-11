
import { useSearchParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { MealResponse } from "../types";
import RecipeCard from "../components/RecipeCard";

function Search() {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("query") || "";

  const {
    data,
    loading,
    error,
  } = useFetch<MealResponse>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`
  );

  return (
    <main className="search-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <section className="search-header">
        <h1>Search Results</h1>

        <p>
          Showing recipes for: <strong>{searchTerm}</strong>
        </p>
      </section>

      {loading && (
        <p className="search-message">Searching recipes...</p>
      )}

      {error && (
        <p className="error-message">{error}</p>
      )}

      {!loading &&
        !error &&
        data?.meals === null && (
          <div className="no-search-results">
            <h2>No Recipes Found</h2>
            <p>
              We couldn't find recipes matching "{searchTerm}".
              Try searching for something else.
            </p>

            <Link to="/" className="explore-button">
              Explore Recipes
            </Link>
          </div>
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

export default Search;
