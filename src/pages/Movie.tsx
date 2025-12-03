
import { useParams } from "react-router-dom";

/**
 * Movie Page Component
 *
 * Displays detailed information for a single movie by the ID parameter
 */
const Movie = () => {
  const { id } = useParams();
  return (
    <div>Movie ID: {id}</div>
  )
}

export default Movie;