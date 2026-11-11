import useFetch from "../hooks/useFetch";
import type { MealResponse } from "../types";

function Home() {
  const { data, loading, error } = useFetch<MealResponse>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );
  console.log("API Data:", data);
  return (
  <div>
 <h1>Recipe Discovery</h1>

      {loading && <p>Loading recipes...</p>}

      {error && <p>{error}</p>}

      {data?.meals?.map((meal) => (
        <p key={meal.idMeal}>{meal.strMeal}</p>
      ))}
      </div>
  );
}

export default Home;