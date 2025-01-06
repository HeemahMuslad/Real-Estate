import React, { ReactElement } from 'react';
import { Button, ButtonProps as ChakraInputProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraInputProps {
  label: string;
  href: string;
  icon: ReactElement;
}
export const ButtonIcon = ({ label, icon, href, ...rest }: ButtonProps) => {
  return (
    <Button
      as="a"
      href={href}
      rounded="md"
      variant="outline"
      leftIcon={icon}
      colorScheme="brand"
      w={{ base: '100%', xl: 'auto' }}
      {...rest}
    >
      {label}
    </Button>
  );
};
