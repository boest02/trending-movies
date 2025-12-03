// src/tests/handlers.ts
import { http, HttpResponse } from 'msw';

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const handlers = [
  http.get(`${BASE_URL}/trending/movie/week`, () => {
    return HttpResponse.json({
      results: [
        {
          id: 1,
          title: 'Mock Movie',
          backdrop_path: '/mock.jpg',
          vote_average: 8.5,
        },
      ],
    });
  }),
];
