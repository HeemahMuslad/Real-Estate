import { Box } from '@chakra-ui/react';
import type React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box className=" ">
        {children}
      </Box>
      <Box className='text-blue-600'>Logo</Box>
    </>
  );
};
export default AuthLayout;
