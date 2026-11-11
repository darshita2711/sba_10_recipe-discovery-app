
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type {
  MealResponse,
  CategoryResponse,
} from "../types";

import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">
            DISCOVER • COOK • ENJOY
          </span>

          <h1>
            Discover Delicious Recipes
            <br />
            for Every Day
          </h1>

          <p>
            Explore new flavors, discover exciting dishes,
            and find inspiration for your next meal.
          </p>

          <Link to="/favorites" className="hero-button">
            View My Favorites →
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-heading">
          <div>
            <h2>Explore Categories</h2>
            <p>Find recipes based on your favorite food categories.</p>
          </div>
        </div>

        {categoriesLoading && (
          <Spinner message="Loading categories..." />
        )}

        {categoriesError && (
          <ErrorMessage message={categoriesError} />
        )}

        {!categoriesLoading &&
          !categoriesError &&
          !categoryData?.categories?.length && (
            <p>No categories available right now.</p>
          )}

        <div className="category-grid">
          {categoryData?.categories?.map((category) => (
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

      {/* Featured Recipes Section */}
      <section className="recipes-section">
        <div className="section-heading">
          <div>
            <h2>Featured Recipes</h2>
            <p>Some delicious chicken recipes to get you started.</p>
          </div>
        </div>

        {mealsLoading && (
          <Spinner message="Loading featured recipes..." />
        )}

        {mealsError && (
          <ErrorMessage message={mealsError} />
        )}

        {!mealsLoading &&
          !mealsError &&
          !mealData?.meals?.length && (
            <p>No featured recipes found.</p>
          )}

        <div className="recipe-grid">
          {mealData?.meals?.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              meal={meal}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
