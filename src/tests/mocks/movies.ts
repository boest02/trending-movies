// tests/mocks/movies.ts
import type { Movie } from "../../api/tmdb";

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Test Movie",
    tagline: "A mock movie",
    vote_average: 8.5,
    overview: "Overview text",
    poster_path: "/abc.jpg",
    release_date: "2024-01-01",
    homepage: "https://example.com",
    runtime: 120,
  }
];
