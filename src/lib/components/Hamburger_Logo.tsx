import React, { useState } from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Hamburger_Logo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <Box>
      <Flex
        onClick={toggleIsOpen}
        alignItems="center"
        justifyContent="space-between"
        w="full"
        display={{ base: 'none', md: 'block' }}
      >
        {/* <Text
          color="blue"
          fontWeight="bold"
          display={`${isOpen ? 'block' : 'none'}`}
        >
          Sewo
        </Text> */}
        <Icon
          as={HamburgerIcon}
          aria-label="Toggle Sidebar"
          bgColor="brand.100"
          cursor="pointer"
          p="5px"
          fontSize="2rem"
          rounded="lg"
          mr="7px"
        />
      </Flex>
    </Box>
  );
};

export default Hamburger_Logo;
