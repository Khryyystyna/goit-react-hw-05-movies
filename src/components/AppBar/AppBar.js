import { Box } from "components/Box/Box";
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
      <Box as="nav" display="flex" flex={1}>
        {navItems.map(({href,  text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
  );
};
