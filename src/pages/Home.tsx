import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

import { usePopularMovies } from "../api/tmdb";

// import css
import "../css/home.css";

/**
 * Home Page Component
 *
 * Displays Trending movies from API
 */
const Home = () => {
  const { data: movies, isLoading, error } = usePopularMovies();

  if (isLoading) return <Loader message="We'll be right there..." />; 

  if (error)
    return (
      <p data-testid="error-test">
        Error loading movies.{" "}
        {error instanceof Error ? error.message : String(error)}
      </p>
    );

  return (
    <>
      <header>
        <h1 className="home-title">Trending Movies</h1>
      </header>

      <section className="movie-list" aria-label="Trending Movies">
        <ul>
          {movies && movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
