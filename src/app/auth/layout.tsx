import { Box } from '@chakra-ui/react';
import type React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="background w-full  flex items-center justify-center flex-col ">
      {children}
    </Box>
  );
};
export default AuthLayout;
