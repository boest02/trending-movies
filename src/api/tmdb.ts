const API_KEY = "86cecf11be63b7d9469b0ff19d1a667a";
const BASE_URL = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  homepage: string;
  runtime: number;
}

const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`Network response was not ok! Status: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
};

export { fetchPopularMovies };
export type { Movie };