'use client';

import { Formik, Form, Field } from 'formik';
import { Box, Button, VStack } from '@chakra-ui/react';
import { InputElement } from './FormInputs';
import { PasswordInput } from './PasswordInput';
import { ReactNode } from 'react';

interface FormProps {
  initialValues: ReactNode;
  validationSchema: any;
  onSubmit: (values: any, actions: any) => void;
  fields: { name: string; label: string; type: string }[];
}

export const AuthForm = ({ initialValues, validationSchema, onSubmit, fields }: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <VStack spacing={4}>
            {fields.map((field) =>
              field.type === 'password' ? (
                <PasswordInput key={field.name} />
              ) : (
                <Box key={field.name} w="100%">
                  <Field name={field.name}>
                    {({ field }: any) => (
                      <InputElement
                        {...field}
                        label={field.label}
                        type={field.type}
                        placeholder={field.label}
                        isInvalid={touched[field.name] && !!errors[field.name]}
                      />
                    )}
                  </Field>
                  {errors[field.name] && touched[field.name] && (
                    <Box color="red.500" fontSize="xs">
                      {errors[field.name]}
                    </Box>
                  )}
                </Box>
              )
            )}
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              w="full"
            >
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
