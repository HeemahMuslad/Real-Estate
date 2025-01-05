import React from 'react';
import { Button, ButtonProps as ChakraInputProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraInputProps {
  label: string;
}
export const ButtonElement = ({ label }: ButtonProps) => {
  return (
    <Button colorScheme="blue"  rounded=" md"variant="solid">
      {label}
    </Button>
  );
};

export default ButtonElement;
