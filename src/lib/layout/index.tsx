'use client';

import { Box } from '@chakra-ui/react';
// import type { ReactNode } from "react";

// import Footer from "./Footer";
// import Header from "./Header";

// type LayoutProps = {
//   children: ReactNode;
// };
// { children }: LayoutProps
const Layout = () => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      {/* <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box> */}
    </Box>
  );
};

export default Layout;
