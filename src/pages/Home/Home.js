import { getTrending } from "API";
import { useState, useEffect } from 'react';
import { Box } from "components/Box/Box";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [trendings, setTrendings] = useState([]);
    
  useEffect(() => {
    getTrending()
      .then(({ results }) => {
        setTrendings(results);
      })
      .catch(error => {
        return console.log(error)
      });
  }, []);

  return (
    <div>
      <Box as='nav' display='flex' flexDirection='column'>
        <h1>Trendings today</h1>
        <ul>
        {trendings.map(trending => {
          return (
            <li key={trending.id}>
              <NavLink to={`/movies/${trending.id}`}>{trending.title}</NavLink>
              </li>
          )})}
          </ul>
      </Box>
    </div>
  )
}

export default Home;