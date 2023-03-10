import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);