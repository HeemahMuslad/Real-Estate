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

import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  fullName: Yup.string().required('Full name is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUpForm = () => {
  const initialValues = {
    email: '',
    fullName: '',
    password: '',
  };

  const handleSubmit = (
    values: { email: string; fullName: string; password: string },
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
            Create your Free Account{' '}
          </Heading>
          <Text color="brand.600" fontSize="x-small" mb="15px">
            Submit your data to register{' '}
          </Text>

          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Stack>
                  <Box>
                    <Field name="fullName">
                      {({ field }: any) => (
                        <InputElement
                          {...field}
                          label="Full Name"
                          placeholder="Enter your Full name"
                          isInvalid={touched.fullName && !!errors.fullName}
                        />
                      )}
                    </Field>
                    {errors.fullName && touched.fullName && (
                      <Box color="red.500" fontSize="xs">
                        {errors.fullName}
                      </Box>
                    )}
                  </Box>
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

                  <Flex fontSize="x-small" gap="0.5" mb="6">
                    <Checkbox> </Checkbox> I agree to Sewo
                    <Text as="a" href="#" color="blue">
                      Security
                    </Text>
                    and
                    <Text as="a" href="#" color="blue">
                      Privacy Policy
                    </Text>
                  </Flex>

                  <ButtonElement
                    type="submit"
                    label="Get Started"
                    isLoading={isSubmitting}
                  />
                </Stack>
              </Form>
            )}
          </Formik>

          <Text textAlign="center" mt="50px" color="brand.600" fontSize="sm">
            I have an account?{' '}
            <Text as="a" color="blue" href="#">
              Login
            </Text>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
