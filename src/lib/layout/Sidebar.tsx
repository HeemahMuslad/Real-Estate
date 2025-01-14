'use client';

import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Icon,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaMedal } from 'react-icons/fa';
import { GiCorkscrew } from 'react-icons/gi';
import { MdDashboard, MdLogout, MdPerson } from 'react-icons/md';

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const menuItem = [
    { id: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
    { id: 'Explore', path: '/dashboard/explore', icon: <GiCorkscrew /> },
    { id: 'My Order', path: '/dashboard/order', icon: <FaMedal /> },
    { id: 'Message', path: '/dashboard/message', icon: <FaMedal /> },
    { id: 'My Profile', path: '/dashboard/profile', icon: <MdPerson /> },
  ];

  const SidebarContent = () => (
    <VStack alignItems="start" spacing="4" w="full" h="100%" p={4} zIndex={10}>
      <Text fontWeight="bold" fontSize="lg" mb={6} color="blue">
        Sewo
      </Text>
      {menuItem.map((item, index) => (
        <ChakraLink
          as={Link}
          href={item.path}
          key={index}
          style={{ textDecoration: 'none' }}
          w="full"
        >
          <Flex
            alignItems="center"
            bgColor={pathname === item.path ? 'brand.100' : ''}
            rounded="md"
            px="3"
            py="2"
            gap="3"
          >
            {item.icon}
            <Text>{item.id}</Text>
          </Flex>
        </ChakraLink>
      ))}
      <ChakraLink as={Link} href="#" w="full" mt="auto">
        <Flex
          alignItems="center"
          gap="3"
          color="red.500"
          px="3"
          py="2"
          rounded="md"
        >
          <MdLogout />
          Logout
        </Flex>
      </ChakraLink>
    </VStack>
  );

  return (
    <>
      {isMobile ? (
        <>
          {/* Hamburger Icon for Mobile */}
          <Flex justify="space-between" w="full">
            {/* Logo from Desktop Sidebar */}
            <Text
              fontWeight="bold"
              fontSize="lg"
              color="blue"
              position="fixed"
              top="25px"
              left="20px"
            >
              Sewo
            </Text>

            <Flex
              position="fixed"
              top="15px"
              right="20px"
              onClick={onOpen}
              bg="white"
              p="2"
              boxShadow="md"
              cursor="pointer"
              zIndex={10}
            >
              <HamburgerIcon boxSize={6} />
            </Flex>
          </Flex>
          {/* Mobile Sidebar Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <SidebarContent />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        // Sidebar for Desktop

        <SidebarContent />
      )}
    </>
  );
};

export default Sidebar;
