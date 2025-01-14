// // // 'use client';

// // // import { Box } from '@chakra-ui/react';
// // // import type { ReactNode } from 'react';

// // // import Header from './Header';

// // // type LayoutProps = {
// // //   children: ReactNode;
// // // };

// // // const Layout = ({ children }: LayoutProps) => {

// // //   return (
// // //     <Box  transition="0.5s ease-out">
// // //       <Box >
// // //         <Header />
// // //         <Box as="main" >
// // //           {children}
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Layout;
// // 'use client';

// // import React from 'react';

// // import { Box, Flex } from '@chakra-ui/react';

// // // import Footer from "@components/Footer";
// // // import Header from "@components/Header";

// // import Sidebar from './Sidebar';

// // const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
// //   return (
// //     <>
// //       <Flex alignItems="center">
// //         <Sidebar />
// //         {/* <Box className="flex-1 flex flex-col overflow-hidden"> */}
// //           {/* <Header /> */}
// //           <Box
// //             as="main"
// //             // flex="1"
// //             p={10}
// //             // margin="0 auto"
// //             maxWidth={1400}
// //             margin="8"
// //             // ml={{ base: '20px' }}
// //             // mt="160px"
// //             // className="z-0 flex "
// //           >
// //             {children}
// //           </Box>
// //           {/* <Footer /> */}
// //         {/* </Box> */}
// //       </Flex>
// //     </>
// //   );
// // };

// // export default DashboardLayout;
// 'use client';

// import React from 'react';
// import { Box, Flex, VStack } from '@chakra-ui/react';
// import Sidebar from './Sidebar';
// import Header from './Header';

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <Flex h="100vh" overflow="hidden">
//       <Sidebar />
//       <VStack>
//         {' '}
//         <Box
//           as="header"
//           // w="100%"
//           h="60px" // Adjust the height of the header
//           bg="blue.500"
//           color="white"
//           p={4}
//         >
//           <Header />
//         </Box>
//         <Box flex="1" p={6} overflow="auto" h="100%" bgColor="brand.100">
//           {children}
//         </Box>
//       </VStack>
//     </Flex>
//   );
// };

// export default DashboardLayout;
'use client';

import React from 'react';
import { Box, Flex,  useBreakpointValue,
 } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex h="100vh" overflow="hidden">
      {/* Sidebar */}
      <Box
        as="nav"
        position="static"
        left="0"
        top="0"
        h="100%"
        pt="10px"
        pb="5px"
        boxShadow="lg"
        bgColor="white"
        zIndex={2}
      >
        <Sidebar />
      </Box>

      {/* Main Section */}
      <Flex flex="1" direction="column" overflow="hidden">
        {/* Header */}
        <Box
          as="header"
          h="80px"
          bgColor="white"
          p={4}
          w="100%" // Full width of the main section
          // zIndex={2}
          boxShadow="md"
          // position="fixed"
          // top="0"
          // left="0"
          // right="0"
        >
          <Header />
        </Box>

        {/* Main Content */}
        <Box as="main" flex="1" p={6} overflow="auto" bgColor="gray.50">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
