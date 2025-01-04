'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // margin="0 auto" maxWidth={1400}
  // margin="8"
  return (
    <Box  transition="0.5s ease-out">
      <Box >
        <Header />
        <Box as="main" >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
