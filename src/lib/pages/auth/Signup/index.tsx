'use client';
import { Flex, useMediaQuery } from '@chakra-ui/react';

import SideImage from '../components/SignUpPageSideImage';
import SignUpForm from '../components/SignupForm';

const index = () => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

  return (
    <Flex height="100vh" width="100%" align="center">
      {isLargerThan700 && <SideImage />}
      <SignUpForm />
    </Flex>
  );
};

export default index;
