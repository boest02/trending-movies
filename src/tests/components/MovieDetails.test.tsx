import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails";
import { mockMovies, MovieTypes } from "../mocks/movies";
import { describe, it, expect, afterEach } from "vitest";

const fullMovie = mockMovies[MovieTypes.MOVIE_FULL];

afterEach(() => {
  // force cleanup if needed
  cleanup();
});

describe("Movie Details...", async () => {
  it("renders MovieDetails component", async () => {
    render(
      <MemoryRouter>
        <MovieDetails movie={fullMovie} />
      </MemoryRouter>
    );

    // movie card rendered
    const element = await screen.findByTestId("movie-details");
    expect(element).toBeDefined();

    // has correct title    
    expect(screen.getByText(fullMovie.title)).toBeDefined();

    // image rendered with title as part of the alt tag
    const img = screen.getByAltText<HTMLImageElement>(new RegExp(fullMovie.title, 'i'));
    expect(img).toBeDefined();

    // src has backdrop image
    expect(img.src).toContain(fullMovie.backdrop_path);

    // favorite button rendered
    const favBtn = await screen.findByTestId("favorite-btn");
    expect(favBtn).toBeDefined();

  });

});
