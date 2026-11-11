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
       <div key={meal.idMeal}>
        <h3>{meal.strMeal}</h3>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width="200"
        />
      </div>
    ))}
  </div>
  )
}

export default Home;