// src/tests/server.ts
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

import { mockMovies } from "./mocks/movies";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const server = setupServer(
  http.get(`${BASE_URL}/trending/movie/week`, () => {
    return HttpResponse.json({ results: mockMovies });
  })
);
