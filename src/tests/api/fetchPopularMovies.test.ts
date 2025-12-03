import { describe, it, expect } from "vitest";
import { fetchPopularMovies } from "../../api/tmdb";
import { server } from "../server";
import { beforeAll, afterAll, afterEach } from "vitest";

// Start and clean up
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchPopularMovies", () => {
  it("fetches popular movies successfully", async () => {
    const movies = await fetchPopularMovies();
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
    expect(movies[0]).toHaveProperty("id");
    expect(movies[0]).toHaveProperty("title");
    expect(movies[0]).toHaveProperty("poster_path");
  });
});
