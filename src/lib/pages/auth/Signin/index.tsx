import SideImage from '../components/SideImage';
import {Box, Text } from '@chakra-ui/react';
import AuthLayout from '../layout';
const index = () => {
  return (
    <AuthLayout>
      <Box>
        <Text color="brand.100">hello</Text>
        <SideImage />
      </Box>
    </AuthLayout>
  );
};

export default index;
