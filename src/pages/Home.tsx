
import useFetch from "../hooks/useFetch";
import type {
  MealResponse,
  CategoryResponse,
} from "../types";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

function Home() {
  const {
    data: mealData,
    loading: mealsLoading,
    error: mealsError,
  } = useFetch<MealResponse>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );

  const {
    data: categoryData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch<CategoryResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>Discover Delicious Recipes</h1>
        <p>Find something delicious to cook today.</p>
      </section>

      <section className="categories-section">
        <h2>Explore Categories</h2>

        {categoriesLoading && <p>Loading categories...</p>}

        {categoriesError && <p>{categoriesError}</p>}

        <div className="category-grid">
          {categoryData?.categories.map((category) => (
            <Link
              to={`/category/${encodeURIComponent(category.strCategory)}`}
              className="category-card"
              key={category.idCategory}
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
              />

              <h3>{category.strCategory}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="recipes-section">
        <h2>Chicken Recipes</h2>

        {mealsLoading && <p>Loading recipes...</p>}

        {mealsError && <p className="error-message">{mealsError}</p>}

        {!mealsLoading &&
          !mealsError &&
          mealData?.meals?.length === 0 && (
            <p>No recipes found.</p>
          )}

        <div className="recipe-grid">
          {mealData?.meals?.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
