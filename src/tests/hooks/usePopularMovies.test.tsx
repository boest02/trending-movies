import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import { mockMovies } from "../mocks/movies";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

import * as api from "../../api/tmdb"; // your API module

vi.spyOn(api, "fetchPopularMovies").mockResolvedValue(mockMovies);

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

describe("usePopularMovies...", () => {
  it("renders movies from API", async () => {
    renderWithClient(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    //Wait for the data to appear
    await waitFor(() => {
      mockMovies.forEach((movie) => {
        expect(screen.getByText(movie.title)).toBeInTheDocument();
      });
    });
  });
});
