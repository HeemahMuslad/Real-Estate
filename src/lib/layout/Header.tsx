'use client';
import React from 'react';

import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { MdNotifications } from 'react-icons/md';

const Header = () => {
  return (
    <Flex alignItems="center" justifyContent={{ base: 'flex-end', md: "space-between" }}>
      <Flex alignItems="center" display={{ base: 'none', md: 'block' }}>
        <InputGroup size="lg" width="400px">
          <Input placeholder="Search here" variant="filled" />
          <InputRightElement cursor="pointer">
            <Icon as={Search2Icon} color="brand.400" fontSize="20px" />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Flex alignItems="center" gap="5">
        <IconButton
          aria-label="Notifications"
          variant="ghost"
          icon={<MdNotifications />}
          size="md"
          fontSize="30px"
        />
        <Box h="40px" w="40px" border="1px" rounded="full"></Box>
      </Flex>
    </Flex>
  );
};

export default Header;
