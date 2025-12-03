import { useEffect, useState } from "react";

const STORAGE_KEY = "favoriteMovieIds";

/**
 * Get initial favorites from localStorage
 */
const getInitialFavorites = (): number[] => {
  try {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch {
    // TODO: ignore parse/localStorage errors for now
  }
  return [];
};

/**
 * Custom hook to manage favorite movie IDs with localStorage persistence
 */
const useFavorites = () =>  {
  const [favorites, setFavorites] = useState<number[]>(getInitialFavorites);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // TODO: ignore storage errors for now
    }
  }, [favorites]);

  // Check if a movie ID is in favorites
  const isFavorite = (id: number) => favorites.includes(id);

  // Toggle a movie ID in favorites
  const toggleFavorite = (id: number) => {
    setFavorites(
      (prev) =>
        prev.includes(id)
          ? prev.filter((f) => f !== id) // remove
          : [...prev, id] // add
    );
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
};

export { useFavorites };
