import { usePopularMovies } from "../api/tmdb";
import type { Movie } from "../api/tmdb";
import { Link } from "react-router-dom";

// import css
import "../css/home.css";

/**
 * Home Page Component
 *
 * Displays Trending movies from API
 */
const Home = () => {
  const { data: movies, isLoading, error } = usePopularMovies();

  if (isLoading) return <p>Loading movies...</p>;

  if (error)
    return (
      <p>
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
              <article>
                <Link to={`/movie/${movie.id}`}>
                  <h2>{movie.title}</h2>
                  <p>{movie.release_date}</p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
