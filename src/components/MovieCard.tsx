import { Link } from "react-router-dom";
import Favorite from "./Favorite.tsx";
import ImageLoader from "./ImageLoader.tsx";
import { useFavorites } from "../hooks/useFavorites";
import type { Movie } from "../api/tmdb";

import "../css/movieCard.css";

const POSTER_BASE_URL = import.meta.env.VITE_POSTER_SMALL_BASE_URL;

// Props for MovieCard component
type MovieCardProps = {
  movie: Movie;
};

/**
 * MovieCard Component
 *
 * Displays a movie poster and title as a link to the movie detail page
 * for the given movie.  This is used on the Home page to show trending movies.
 */
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Use favorites hook
  const { isFavorite, toggleFavorite } = useFavorites();

  // Determine display title with truncation if necessary to not overflow
  const displayTitle =
    movie.title.length > 20 ? movie.title.slice(0, 17) + "..." : movie.title;

  return (
    <article className="movie-card" data-testid="movie-card">
      <Favorite
        initial={isFavorite(movie.id)}
        onToggle={() => toggleFavorite(movie.id)}
      />
      <Link to={`/movie/${movie.id}`}>
        <ImageLoader
          src={`${POSTER_BASE_URL}/${movie.poster_path}`}
          alt={movie.title}
          height="250px"
        />
        <p title={movie.title}>{displayTitle}</p>
      </Link>
    </article>
  );
};

export default MovieCard;
