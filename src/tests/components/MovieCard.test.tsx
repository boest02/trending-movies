import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { mockMovies, MovieTypes } from "../mocks/movies";
import { describe, it, expect, afterEach } from "vitest";

const fullMovie = mockMovies[MovieTypes.MOVIE_FULL];

afterEach(() => {
  // force cleanup if needed
  cleanup();
});

describe("Movie Card...", async () => {
  it("renders MovieCard component", async () => {
    render(
      <MemoryRouter>
        <MovieCard movie={fullMovie} />
      </MemoryRouter>
    );

    // movie card rendered
    const element = await screen.findByTestId("movie-card");
    expect(element).toBeDefined();

    // has correct title    
    expect(screen.getByText(fullMovie.title)).toBeDefined();

    // image rendered with title as alt tag
    const img = screen.getByAltText<HTMLImageElement>(fullMovie.title);
    expect(img).toBeDefined();

    // src has poster image
    expect(img.src).toContain(fullMovie.poster_path);

    // favorite button rendered
    const favBtn = await screen.findByTestId("favorite-btn");
    expect(favBtn).toBeDefined();

  });

});
