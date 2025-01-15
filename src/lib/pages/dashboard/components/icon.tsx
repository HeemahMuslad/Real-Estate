'use client';

import React from 'react';
import { Box, Icon, IconProps, Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface CustomIconProps extends IconProps {
  as: IconType;
}

const CustomIcon = ({ as, ...rest }: CustomIconProps) => {
  return (
    <Button p="0px" rounded="md" variant="outline">
      <Icon as={as} {...rest} />
    </Button >
  );
};

export default CustomIcon;
