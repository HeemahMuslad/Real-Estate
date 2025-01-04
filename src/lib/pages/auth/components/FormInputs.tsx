import { FormControl, FormLabel, Input } from '@chakra-ui/react';

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
}
export const InputElement = ({ label, placeholder, type = 'text', ...rest}: InputProps) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Input outlineColor="brand.300" type={type} placeholder={placeholder} {...rest} />
    </FormControl>
  );
};
