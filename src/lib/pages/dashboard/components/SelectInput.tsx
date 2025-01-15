'use client';

import React from 'react';
import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react';

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps extends SelectProps {
  name?: string; 
}

const Selectnput: React.FC<CustomSelectProps> = ({
  name,
  placeholder = 'Select an option',
  ...rest
}) => {
  return (
    <Select name={name} placeholder={placeholder} {...rest}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export default Selectnput;
