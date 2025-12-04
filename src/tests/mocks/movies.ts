// tests/mocks/movies.ts
import type { Movie } from "../../api/tmdb";

export const MovieTypes = {
  MOVIE_FULL: 0,
  MOVIE_NO_HOMEPAGE: 1,
  MOVIE_NO_TAGLINE: 2,
  // Add more types as needed
} as const;

export type MovieType = typeof MovieTypes[keyof typeof MovieTypes];


export const mockMovies: Movie[] = [
  {
    id: 1001,
    title: "Test Movie 1",
    tagline: "A mock movie",
    vote_average: 8.5,
    overview: "Overview text",
    poster_path: "/abc.jpg",
    backdrop_path: "/abc-backdrop.jpg",
    release_date: "2024-01-01",
    homepage: "https://example.com",
    runtime: 120,
  },
  {
    id: 1002,
    title: "Test Movie 2",
    tagline: "A mock movie",
    vote_average: 8.5,
    overview: "Overview text",
    poster_path: "/abc.jpg",
    backdrop_path: "/abc-backdrop.jpg",
    release_date: "2024-01-01",
    // MOVIE_NO_HOMEPAGE
    runtime: 120,
  },
  {
    id: 1003,
    title: "Test Movie 3",
    // MOVIE_NO_TAGLINE
    vote_average: 8.5,
    overview: "Overview text",
    poster_path: "/abc.jpg",
    backdrop_path: "/abc-backdrop.jpg",
    release_date: "2024-01-01",
    homepage: "https://example.com",
    runtime: 120,
  }
];
