import {
  Box,
  Checkbox,
  Heading,
  Flex,
  Stack,
  Text,
  Divider,
} from '@chakra-ui/react';
import Link from 'next/link';

import { InputElement } from './FormInputs';
import { PasswordInput } from './PasswordInput';
import { ButtonElement } from '~/lib/components/Button';
import { ButtonIcon } from '~/lib/components/ButtonIcon';

import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

const SigninForm = () => {
  return (
    <Flex
      bg="white"
      w={{ base: '100%', md: '50%' }}
      pt="20px"
      pb="50px"
      h="100%"
    >
      <Box w="70%" mx="auto">
        <Box textAlign="right">
          <Text as="a" href="#"  fontSize="xs">
            Login
          </Text>
        </Box>

        <Stack my="7">
          <Heading size="xl" fontWeight="bold">
            Welcome Back to Sewo!
          </Heading>
          <Text color="brand.600" fontSize="x-small" mb="15px">
            Sign in your account
          </Text>
          <Stack as="form">
            <InputElement label="Your Email" placeholder="" />
            <PasswordInput />
            <Flex alignItems="center" justifyContent="space-between" mb="6">
              <Checkbox defaultChecked fontSize="x-small">
                Remember Me
              </Checkbox>
              <Text as="a" href="#" color="brand.400" fontSize="x-small">
                Forgot Password?
              </Text>
            </Flex>
            <ButtonElement label="Login" />
            <Box display="flex" alignItems="center" width="100%">
              <Divider flex="1" border="1" />
              <Text px="4" whiteSpace="nowrap">
                Instant Login{' '}
              </Text>
              <Divider flex="1" border="1" />
            </Box>
            <Flex
              alignItems={{ base: 'center', xl: 'flex-start' }}
              flexDirection={{ base: 'column', xl: 'row' }}
              gap={4}
              w="100%"
              justifyContent={{ base: 'center', lg: 'space-between' }}
              mt="15px"
            >
              <ButtonIcon
                href="#"
                label="Continue with Google"
                icon={<FcGoogle />}
              />
              <ButtonIcon
                label="Continue with Facebook"
                icon={<ImFacebook2 />}
                href="#"
              />
            </Flex>
            <Text textAlign="center" mt="50px">
              Don't have any account?
              <Text as="a" color="blue" href="#">
                Register
              </Text>
            </Text>
          </Stack>
        </Stack>

        <Box />
      </Box>
    </Flex>
  );
};

export default SigninForm;
