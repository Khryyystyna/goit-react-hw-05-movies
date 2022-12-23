import styled from 'styled-components';

export const List = styled.ul`
  padding: 40px;
`;

export const Item = styled.li`
  list-style: square;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;