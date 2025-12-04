import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

// Define the Movie interface based on TMDB API response structure
interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  homepage: string;
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

/**
 * Custom hook that fetches the list of trending movies.
 *
 * Uses TanStack Query to:
 * - cache results under the "trending-movies" query key
 * - handle loading, error, and refetching states automatically
 *
 * @returns {UseQueryResult<Movie[]>} Query result object containing:
 *   - data: the list of trending movies
 *   - isLoading: loading status
 *   - error: error information
 *   - refetch: function to manually refetch
 */

const usePopularMovies = () => {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchPopularMovies,
  });
};

/*
 * Custom hook that fetches detailed information about a specific movie by its ID.
 * Uses TanStack Query to:
 * - cache results under the "movie" query key with the movie ID
 * - handle loading, error, and refetching states automatically
 *
 * @param {string | undefined} id - The ID of the movie to fetch details for
 * @returns {UseQueryResult<Movie>} Query result object containing:
 *   - data: detailed information about the movie
 *   - isLoading: loading status
 *   - error: error information
 *   - refetch: function to manually refetch
 */

const useMovie = (id: string | undefined) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(id!),
    enabled: !!id,
  });
};

export { usePopularMovies, useMovie, fetchPopularMovies, fetchMovieById };
export type { Movie };
