import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';



export const Image = styled.img`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
 width: 200px;
 height: 300px;
 margin: 20px;
`;

export const Card = styled.div`
display: flex;
`;

export const Information = styled.div`

`;

export const Links = styled(Link)`
  max-width: 100px;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: 700;
  background-color: #f118f5;
  padding: 10px 20px;
  border-radius: 20px;
`;

export const NavLinks = styled(NavLink)`
  max-width: 80px;
  text-align: center;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: 400;
  background-color: #f118f5;
  padding: 5px 8px;
  border-radius: 20px;
  margin-left: 20px;
`;


export const List = styled.ul`
list-style: none;
`;

export const Item = styled.li`
margin-top: 30px;
`;