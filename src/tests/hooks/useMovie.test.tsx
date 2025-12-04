import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Movie from "../../pages/Movie";
import { mockMovies, MovieTypes } from "../mocks/movies";

import * as api from "../../api/tmdb"; // your API module

const fullMovie = mockMovies[MovieTypes.MOVIE_FULL];

vi.spyOn(api, "fetchMovieById").mockResolvedValue(fullMovie);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false }, // prevent retrying in tests
  },
});

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("useMovie...", () => {
  it("renders movie from API", async () => {
    renderWithClient(
      <MemoryRouter initialEntries={["/movie/123"]}>
        <Routes>
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    //Wait for the data to appear
    await waitFor(() => {
      expect(screen.getByText(fullMovie.title)).toBeInTheDocument();
    });
  });
});
