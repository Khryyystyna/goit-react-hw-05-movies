import styled from 'styled-components';

export const List = styled.ul`
  padding: 40px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 100px;
`;