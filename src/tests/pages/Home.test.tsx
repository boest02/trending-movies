import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { vi, describe, it, expect, afterEach } from "vitest";
import type { Mock } from "vitest";
import { mockMovies } from "../mocks/movies";

vi.mock("../../hooks/usePopularMovies", () => ({
  usePopularMovies: vi.fn(),
}));

afterEach(() => {
  // force cleanup if needed
  cleanup();
});

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

  it("renders loading...", async () => {
    (usePopularMovies as unknown as Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const element = await screen.findByTestId("loading-test");
    expect(element).toBeDefined();
  });

  it("renders error...", async () => {
    (usePopularMovies as unknown as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: { message: "Failed to fetch" },
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const element = await screen.findByTestId("error-test");
    expect(element).toBeDefined();
  });
});
