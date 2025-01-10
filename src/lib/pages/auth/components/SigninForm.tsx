
import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Checkbox,
  Heading,
  Flex,
  Stack,
  Text,
  Divider,
} from '@chakra-ui/react';
import { InputElement } from './FormInputs';
import { PasswordInput } from './PasswordInput';
import { ButtonElement } from '~/lib/components/Button';
import { ButtonIcon } from '~/lib/components/ButtonIcon';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SigninForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (
    values: { email: string; password: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form submitted:', values);
  
    resetForm();
  };
  

  return (
    <Flex
      bg="white"
      w={{ base: '100%', md: '50%' }}
      pt="20px"
      pb="50px"
      h="100%"
    >
      <Box w="70%" mx="auto">
        <Flex justifyContent={{ base: 'space-between', md: 'end' }}>
                  <Text
                    color="blue"
                    fontWeight="bold"
                    mb="50px"
                    display={{ base: 'block', md: 'none' }}
                    justifyContent=""
                  >
                    Sewo
                  </Text>
                  <Text as="a" href="#" fontSize="xs">
                    Register
                  </Text>
                </Flex>

        <Stack my="7">
          <Heading size="xl" fontWeight="bold">
            Welcome Back to Sewo!
          </Heading>
          <Text color="brand.600" fontSize="x-small" mb="15px">
            Sign in to your account
          </Text>

          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Stack>
                  <Box>
                    <Field name="email">
                      {({ field }: any) => (
                        <InputElement
                          {...field}
                          label="Your Email"
                          placeholder="Enter your email"
                          isInvalid={touched.email && !!errors.email}
                        />
                      )}
                    </Field>
                    {errors.email && touched.email && (
                      <Box color="red.500" fontSize="xs">
                        {errors.email}
                      </Box>
                    )}
                  </Box>

                  <Box>
                    <Field name="password">
                      {({ field }: any) => (
                        <PasswordInput
                          {...field}
                          label="Your Password"
                          placeholder="Enter your password"
                          isInvalid={touched.password && !!errors.password}
                        />
                      )}
                    </Field>
                    {errors.password && touched.password && (
                      <Box color="red.500" fontSize="xs">
                        {errors.password}
                      </Box>
                    )}
                  </Box>

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mb="6"
                  >
                    <Checkbox fontSize="x-small">Remember Me</Checkbox>
                    <Text as="a" href="#" color="brand.400" fontSize="x-small">
                      Forgot Password?
                    </Text>
                  </Flex>

                  <ButtonElement
                    type="submit"
                    label="Login"
                    isLoading={isSubmitting}
                  />
                </Stack>
              </Form>
            )}
          </Formik>
          <Box display="flex" alignItems="center" width="100%">
            <Divider flex="1" border="1" />
            <Text px="4" whiteSpace="nowrap">
              Instant Login
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
            Don't have an account?{' '}
            <Text as="a" color="blue" href="#">
              Register
            </Text>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SigninForm;
