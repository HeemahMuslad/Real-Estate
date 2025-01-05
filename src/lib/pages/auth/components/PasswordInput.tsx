'use client';

import React from 'react';

import { Button, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { InputElement } from './FormInputs';
import {MdVisibility, MdVisibilityOff } from 'react-icons/md';

export function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <InputElement
        label="Password"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        pr="4.5rem"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick} top="6">
          {show ? <MdVisibilityOff /> : <MdVisibility/>}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
