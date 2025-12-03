import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";
import { usePopularMovies } from "../../api/tmdb";
import { vi, describe, it, expect } from "vitest";
import type { Mock } from "vitest";

vi.mock("../../api/tmdb", () => ({
  usePopularMovies: vi.fn(),
}));

const mockMovies = [
  { id: 1, title: "Movie 1", poster_path: "/movie1.jpg" },
  { id: 2, title: "Movie 2", poster_path: "/movie2.jpg" },
];

describe("Home Page", () => {
  it("renders movies list", () => {
    (usePopularMovies as unknown as Mock).mockReturnValue({
      data: mockMovies,
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.queryByText("Trending Movies")).not.toBeNull();

    mockMovies.forEach((movie) => {
      expect(screen.queryByText(movie.title)).not.toBeNull();
    });

  });
});
