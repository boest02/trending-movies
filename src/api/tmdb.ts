
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

// Define the Movie interface based on TMDB API response structure
interface Movie {
  id: number;
  title: string;
  tagline?: string;
  vote_average: number;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  homepage?: string;
  runtime: number;
}

// Function to fetch popular movies from TMDB API
// TODO: Add ability to pass a prop to support both weekly and daily trending movies

const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`Network response was not ok! Status: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
};

// Function to fetch detailed information about a specific movie by its ID

const fetchMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`Network response was not ok! Status: ${res.status}`);
  }
  return res.json();
};

export { fetchPopularMovies, fetchMovieById };
export type { Movie };
