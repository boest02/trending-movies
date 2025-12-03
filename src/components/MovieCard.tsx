import { Link } from "react-router-dom";
import type { Movie } from "../api/tmdb";

import "../css/movieCard.css";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {  

  const displayTitle =
    movie.title.length > 20 ? movie.title.slice(0, 17) + "..." : movie.title;  

  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
        />
        <p title={movie.title}>{displayTitle}</p>
      </Link>
    </article>
  );
};

export default MovieCard;
