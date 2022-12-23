import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 800px;
  padding: 20px;
  color: black;
  font-weight: bold;
  &.active {
    color: #f118f5;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color:#f118f5;
  }
`;