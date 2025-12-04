import { fetchMovieById } from "../api/tmdb";
import type { Movie } from "../api/tmdb";

import { useQuery } from "@tanstack/react-query";


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
  return useQuery<Movie, Error>({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(id!),
    enabled: !!id,
  });
};

export { useMovie };