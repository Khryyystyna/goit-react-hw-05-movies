import { useParams, Link, Outlet } from 'react-router-dom';
import { detalisMovie } from 'API';
import { useEffect, useState } from 'react';
import { Image, Information, Card } from './MovieDetalis.styled';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const [detalis, setDetalis] = useState({});
  const { movieId } = useParams();
    
  useEffect(() => {
    detalisMovie(movieId)
      .then(setDetalis)
      .catch(error => {
        return console.log(error);
      });
  }, [movieId]);

  const releaseYear = new Date(detalis.release_date);

  return (
    <div>
      <Link to="/">Go back</Link>
      <Card>
        <Image
          src={`${BASE_IMAGE_URL}${detalis.poster_path}`}
          alt={detalis.title}
          width="320"
        />
        <Information>
          <h3>
            {detalis.title} ({releaseYear.getFullYear()})
          </h3>
          <p>User score: </p>
          <h5>Overview</h5>
          <p>{detalis.overview}</p>
          <h5>Genres</h5>
          <p></p>
        </Information>
      </Card>
      <ul>
        <p>Additional information</p>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};