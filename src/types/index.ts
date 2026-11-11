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

export interface CategoryMealResponse {
  meals: Meal[] | null;
}

export interface MealDetails extends Meal {
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;

  [key: string]: string | undefined;
}

export interface MealDetailsResponse {
  meals: MealDetails[] | null;
}