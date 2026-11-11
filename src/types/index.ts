export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealResponse {
  meals: Meal[] | null;
}

export interface RecipeCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryResponse {
  categories: RecipeCategory[];
}