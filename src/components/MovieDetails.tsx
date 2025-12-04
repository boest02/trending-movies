import Favorite from "./Favorite.tsx";
import { useFavorites } from "../hooks/useFavorites";
import type { Movie } from "../api/tmdb";

import "../css/movieDetails.css";

const POSTER_BASE_URL = import.meta.env.VITE_POSTER_LARGE_BASE_URL;

type MovieDetailsProps = {
  movie: Movie;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  // Use favorites hook
  const { isFavorite, toggleFavorite } = useFavorites();

  // Helper to convert minutes to "Xh Ym" format
  const minutesToHoursString = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <article className="movie-details">
      <Favorite
        initial={isFavorite(movie.id)}
        onToggle={() => toggleFavorite(movie.id)}
      />
      <header className="title-area">
        <h1>{movie.title}</h1>
        {movie.overview && <p>{movie.overview}</p>}
      </header>

      <section className="details-table" aria-label="Movie details">
        <dl>
          {movie.tagline && (
            <div>
              <dt>Tagline:</dt>
              <dd>{movie.tagline}</dd>
            </div>
          )}
          <div>
            <dt>Release Date:</dt>
            <dd>{movie.release_date}</dd>
          </div>
          <div>
            <dt>Vote Average:</dt>
            <dd>{movie.vote_average}</dd>
          </div>
          <div>
            <dt>Run Time:</dt>
            <dd>{minutesToHoursString(movie.runtime)}</dd>
          </div>
        </dl>
      </section>

      {movie.homepage && (
        <p>
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
            Movie Home Page
          </a>
        </p>
      )}

      {movie.poster_path && (
        <figure>
          <img
            src={`${POSTER_BASE_URL}${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
            loading="lazy"
          />
        </figure>
      )}
    </article>
  );
};

export default MovieDetails;
