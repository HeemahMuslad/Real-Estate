'use client';

import React from 'react';
import {
  Button,
  InputGroup,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react';
import { InputElement } from './FormInputs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface PasswordInputProps extends InputProps {
  label: string;
}

export function PasswordInput({ label, ...rest }: PasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <InputElement
        label={label}
        type={show ? 'text' : 'password'} 
        placeholder="Enter password"
        pr="4.5rem"
        {...rest} 
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          onClick={handleClick}
          top="6"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <MdVisibilityOff /> : <MdVisibility />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
