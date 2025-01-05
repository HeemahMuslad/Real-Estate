import { Box, Checkbox, Heading, Flex, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { InputElement } from './FormInputs';
import { PasswordInput } from './PasswordInput';
import { ButtonElement } from '~/lib/components/Button';



const SigninForm = () => {
  return (
    <Box h="100%" bg="white" w="55%" pt="20px" pr="50px" pb="50px">
      <Stack w="70%" mx="auto">
        <Text textAlign="right">Login</Text>
        <Heading size="xl" fontWeight="bold">
          Welcome Back to Sewo!
        </Heading>
        <Text color="brand.400" fontSize="x-small" mb="15px">
          Sign in your account
        </Text>
        <Stack as="form">
          <InputElement label="Your Email" placeholder="" />
          <PasswordInput />
          <Flex alignItems="center" justifyContent="space-between" mb="6">
            <Checkbox defaultChecked fontSize="x-small">
              Remember Me
            </Checkbox>
            <Text color="brand.400" fontSize="x-small">
              <Link href="#">Forgot Password?</Link>
            </Text>
          </Flex>
          <ButtonElement label="Login"/>
            
        </Stack>

        <Box />
      </Stack>
    </Box>
  );
};

export default SigninForm;
