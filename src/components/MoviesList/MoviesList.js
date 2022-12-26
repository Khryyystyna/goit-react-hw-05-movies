import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
   <ul>
      {movies.map(({ id, title}) => {
        return (
          <li key={id}>
           <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </li>
        );
      })}
    </ul>
     );
};
