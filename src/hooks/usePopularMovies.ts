import { fetchPopularMovies } from "../api/tmdb";
import type { Movie } from "../api/tmdb";

import { useQuery } from "@tanstack/react-query";

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
  return useQuery<Movie[], Error>({
    queryKey: ['popular-movies'],
    queryFn: fetchPopularMovies,
    staleTime: 1000 * 60 * 5, // 5 minutes before considered stale
    refetchOnWindowFocus: true, // refetch when tab is focused
  });
};

export { usePopularMovies };