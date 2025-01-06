"use client"
import { Flex, useMediaQuery } from '@chakra-ui/react';

import SideImage from '../components/SideImage';
import SigninForm from '../components/SigninForm';
import AuthLayout from '../layout';

const index = () => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

  return (
    <Flex height="100vh" width="100%" align="center">
      {isLargerThan700 && <SideImage />}
      <SigninForm />
    </Flex>
  );
};

export default index;
