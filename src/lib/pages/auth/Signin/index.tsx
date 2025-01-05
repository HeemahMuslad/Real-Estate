import { Flex } from '@chakra-ui/react';

import SideImage from '../components/SideImage';
import SigninForm from '../components/SigninForm';
import AuthLayout from '../layout';

const index = () => {
  return (
    <AuthLayout>
      <Flex height="100vh">
        <SideImage /> <SigninForm />
      </Flex>
    </AuthLayout>
  );
};

export default index;
