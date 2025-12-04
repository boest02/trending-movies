import MovieDetails from "../components/MovieDetails";
import Loader from "../components/Loader";

import { useParams, useNavigate } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";

/**
 * Movie Page Component
 *
 * Displays detailed information for a single movie by the ID parameter
 */
const Movie = () => {
  // Get the movie ID from the URL parameters
  const { id } = useParams();

  // Hook to navigate programmatically for redirect back to home
  const navigate = useNavigate();

  // Fetch movie details using the custom hook
  const { data: movie, isLoading, error } = useMovie(id);
  
  if (isLoading) return <Loader message="Loading movie details..." />;  

  if (error)
    return (
      <>
        <p>
          Error loading movie.{" "}
          {error instanceof Error ? error.message : String(error)}
        </p>
        <button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
          ← Back Home
        </button>
      </>
    );

  if (!movie) return <p>Movie not found.</p>;

  return (
    <>
      <MovieDetails movie={movie} />
      <button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
        ← Back Home
      </button>
    </>
  );
};

export default Movie;
