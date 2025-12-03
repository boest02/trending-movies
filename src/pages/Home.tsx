import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/tmdb";
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
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <header>
        <h1 className="home-title">Trending Movies</h1>
      </header>

      <section className="movie-list" aria-label="Trending Movies">
        <ul>
          {movies.map((movie) => (
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
