import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';


import { InputElement } from './FormInputs';

const SigninForm = () => {
  return (
    <Box
      h="100%"
      bg="white"
      w="55%"
      pt="20px"
      pr="50px"
      pb="50px"
      // color="black"
    >
      <Stack  w="70%" mx="auto">
        <Text>Login</Text>
        <Heading size="xl" fontWeight="bold">
          Welcome Back to Sewo!{' '}
        </Heading>
        <Text color="brand.400">Sign in your account</Text>
        <Box as="form"> 
          <InputElement label="Your Email" placeholder="" />
          <InputElement label="Your Email" placeholder="" />

        </Box>

        <Box />
      </Stack>
    </Box>
  );
};

export default SigninForm;
