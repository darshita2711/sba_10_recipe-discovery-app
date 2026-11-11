
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (recipeId: string) => void;
  removeFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
}

export const FavoritesContext =
  createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] =
    useLocalStorage<string[]>("recipe-favorites", []);

  function addFavorite(recipeId: string) {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(recipeId)) {
        return previousFavorites;
      }

      return [...previousFavorites, recipeId];
    });
  }

  function removeFavorite(recipeId: string) {
    setFavorites((previousFavorites) =>
      previousFavorites.filter((id) => id !== recipeId)
    );
  }

  function isFavorite(recipeId: string) {
    return favorites.includes(recipeId);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used within a FavoritesProvider"
    );
  }

  return context;
}
