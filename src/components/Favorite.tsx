import { useState } from "react";

import "../css/favorite.css";

// props for favorite component, initial value and callback on toggle
type FavoriteProps = {
  initial?: boolean;
  onToggle: (favorite: boolean) => void; // requires a toggle function
};

// define constants
const FAVORITE = '❤️';
const NOT_FAVORITE = '🤍'

/**
 * Favorite Component
 *
 * This is the Favorite button component that lets the user toggle between
 * a favorite and non-favorite state.  It accepts an initial state and
 * a callback function that is called when the state is toggled.
 */
const Favorite = ({ initial = false, onToggle }: FavoriteProps) => {
  const [favorite, setFavorite] = useState(initial);

  const toggleFavorite = () => {
    const next = !favorite;
    setFavorite(next);
    onToggle?.(next);
  };

  return (
    <button
      className="favorite-btn"
      onClick={toggleFavorite}
      title={favorite ? "Remove from favorites" : "Add to favorites"}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      data-testid="favorite-btn"
    >
      {favorite ? FAVORITE : NOT_FAVORITE}
    </button>
  );
};

export default Favorite;
