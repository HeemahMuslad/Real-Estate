import { Box } from '@chakra-ui/react';
import type React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box  transition="0.5s ease-out">
        <Box >
          <Box as="main">
            {children}
          </Box>
        </Box>
      </Box>
      {/* <Box margin="0 auto" maxWidth={1400} transition="0.5s ease-out">
    <Box margin="8">
      <Box as="main" marginY={22}>
        {children}
      </Box>
    </Box>
  </Box> */}
    </>
  );
};
export default AuthLayout;
