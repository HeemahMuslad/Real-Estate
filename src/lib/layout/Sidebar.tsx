// 'use client';
// import React, { useState } from 'react';

// import { HamburgerIcon } from '@chakra-ui/icons';

// import {
//   Box,
//   Link as ChakraLink,
//   VStack,
//   Flex,
//   Icon,
//   Text,
// } from '@chakra-ui/react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FaMedal } from 'react-icons/fa';
// import { GiCorkscrew } from 'react-icons/gi';
// import {
//   MdDashboard,
//   MdLogout,
//   MdNotifications,
//   MdOutlineSettings,
//   MdPayments,
//   MdPerson,
//   // MdReceiptLong,
// } from 'react-icons/md';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const toggleIsOpen = () => setIsOpen(!isOpen);
//   const pathname = usePathname();

//   const menuItem = [
//     {
//       id: 'Dashboard',
//       path: '/dashboard',
//       icon: <MdDashboard />,
//     },

//     {
//       id: 'Explore',
//       path: '/dashboard/explore',
//       icon: <GiCorkscrew />,
//     },
//     {
//       id: 'My Order',
//       path: '/dashboard/order',
//       icon: <FaMedal />,
//     },
//     {
//       id: 'Message',
//       path: '/dashboard/message',
//       icon: <FaMedal />,
//     },
//     {
//       id: 'My Profile',
//       path: '/dashboard/profile',
//       icon: <FaMedal />,
//     },
//   ];

//   return (
//     <VStack
//       w={isOpen ? '200px' : '65px'}
//       pl={isOpen ? '6' : '4'}
//       alignItems="start"
//       transition="width 0.3s"
//       // width={{ base: '0px', md: '50px' }}
//       // paddingLeft={{ base: '0px', md: '65px' }}
//     >
//       <Flex
//         // className=" hover:bg-green rounded-lg cursor-pointer items-center justify-center flex p-2 mb-2 hover:text-white"
//         onClick={toggleIsOpen}
//         alignItems="center"
//         justifyContent="space-between"
//         w="full"
//       >
//         <Text
//           color="blue"
//           fontWeight="bold"
//           display={`${isOpen ? 'block' : 'none'}`}
//         >
//           Sewo
//         </Text>
//         <Icon
//           as={HamburgerIcon}
//           aria-label="Toggle Sidebar"
//           bgColor="brand.100"
//           cursor="pointer"
//           p="5px"
//           fontSize="2rem"
//           rounded="lg"
//           mr="7px"
//           display={{ base: 'block', md: 'none' }}
//         />
//       </Flex>

//       <VStack alignItems="start" spacing="4" position="absolute" top="-500px">
//         <Box>
//           {menuItem.map((item, index) => (
//             <ChakraLink
//               as={Link}
//               href={item.path}
//               key={index}
//               style={{ textDecoration: 'none' }}
//             >
//               <Flex
//                 alignItems="center"
//                 justifyContent="start"
//                 bgColor={`${pathname === item.path ? 'brand.100' : ''}`}
//                 rounded="md"
//                 px="10px"
//                 py="5px"
//                 mt="5px"
//                 gap="3"
//                 color="brand.700"
//                 onClick={toggleIsOpen}
//               >
//                 <Box>{item.icon}</Box>
//                 <Box display={`${isOpen ? 'block' : 'none'}`}> {item.id}</Box>
//               </Flex>
//               {/* // className={  */}
//             </ChakraLink>
//           ))}

//           <ChakraLink as={Link} style={{ textDecoration: 'none' }} href="#">
//             <Flex
//               px="10px"
//               color="red"
//               alignItems="center"
//               position="absolute"
//               bottom="200"
//               gap="2"
//             >
//               <MdLogout />
//               Logout
//             </Flex>
//           </ChakraLink>
//         </Box>
//       </VStack>
//     </VStack>
//   );
// };

// export default Sidebar;
// 'use client';

// import React, { useState } from 'react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import {
//   Box,
//   Link as ChakraLink,
//   VStack,
//   Flex,
//   Icon,
//   Text,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerBody,
//   useDisclosure,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FaMedal } from 'react-icons/fa';
// import { GiCorkscrew } from 'react-icons/gi';
// import { MdDashboard, MdLogout, MdPerson } from 'react-icons/md';

// const Sidebar = () => {
//   const pathname = usePathname();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   const menuItem = [
//     { id: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
//     { id: 'Explore', path: '/dashboard/explore', icon: <GiCorkscrew /> },
//     { id: 'My Order', path: '/dashboard/order', icon: <FaMedal /> },
//     { id: 'Message', path: '/dashboard/message', icon: <FaMedal /> },
//     { id: 'My Profile', path: '/dashboard/profile', icon: <MdPerson /> },
//   ];

//   const SidebarContent = () => (
//     <VStack
//       alignItems="start"
//       spacing="4"
//       w="full"
//       h="0px"
//       p={4}
//     >
//       <Text fontWeight="bold" fontSize="lg" mb={6}>
//         Sewo
//       </Text>
//       {menuItem.map((item, index) => (
//         <ChakraLink
//           as={Link}
//           href={item.path}
//           key={index}
//           style={{ textDecoration: 'none' }}
//           w="full"
//         >
//           <Flex
//             alignItems="center"
//             bgColor={`${pathname === item.path ? 'brand.100' : ''}`}
//             rounded="md"
//             px="3"
//             py="2"
//             gap="3"
//           >
//             {item.icon}
//             <Text>{item.id}</Text>
//           </Flex>
//         </ChakraLink>
//       ))}
//       <ChakraLink as={Link} href="#" w="full" mt="auto">
//         <Flex
//           alignItems="center"
//           gap="3"
//           color="red.500"
//           px="3"
//           py="2"
//           rounded="md"
//         >
//           <MdLogout />
//           Logout
//         </Flex>
//       </ChakraLink>
//     </VStack>
//   );

//   return (
//     <>
//       {isMobile ? (
//         <>
//           {/* Hamburger Icon for Mobile */}
//           <Flex
//             onClick={onOpen}
//             p={4}
//             cursor="pointer"
//             // bg="brand.100"
//             w="fit-content"
//             rounded="md"
//           >
//             <HamburgerIcon boxSize={6} />
//           </Flex>

//           {/* Mobile Sidebar Drawer */}
//           <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//             <DrawerOverlay />
//             <DrawerContent>
//               <DrawerCloseButton />
//               <DrawerBody>
//                 <SidebarContent />
//               </DrawerBody>
//             </DrawerContent>
//           </Drawer>
//         </>
//       ) : (
//         // Sidebar for Desktop
//           <SidebarContent />
//       )}
//     </>
//   );
// };

// export default Sidebar;
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
    <VStack
      alignItems="start"
      spacing="4"
      w="full"
      h="100%" // Ensure full height
      p={4}
      zIndex={10}
    >
      <Text fontWeight="bold" fontSize="lg" mb={6}>
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
        <Box
          as="aside"
          position="fixed"
          left="0"
          top="0"
          h="100vh"
          bg="white"
          boxShadow="lg"
          w="200px"
        >
          <SidebarContent />
        </Box>
      )}
    </>
  );
};

export default Sidebar;
