import { NavLink } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';


export const MoviesList = ({ movies }) => {
  return (
   <List>
      {movies.map(({ id, title}) => {
        return (
          <Item key={id}>
           <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </Item>
        );
      })}
    </List>
     );
};
