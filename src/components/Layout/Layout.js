import { Suspense } from 'react';
import { Box } from "components/Box/Box";
import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
     <Box display="grid" gridTemplateRows="75px 1fr">
      <AppBar />
       <Suspense fallback={null}>
      <Outlet />
      </Suspense>
   </Box>
  );
};