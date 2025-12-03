import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

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

const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`Network response was not ok! Status: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
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

export { usePopularMovies, fetchPopularMovies };
export type { Movie };