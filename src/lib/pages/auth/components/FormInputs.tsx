'use client';

import { FormControl, FormLabel, Input, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label: string;
  placeholder: string;
  type?: string;
}
export const InputElement = ({
  label,
  placeholder,
  type = 'text',
  ...rest
}: InputProps) => {
  return (
    <FormControl isRequired>
      <FormLabel fontSize="x-small">{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </FormControl>
  );
};
