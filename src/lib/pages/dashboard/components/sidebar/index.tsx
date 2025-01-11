"use client";
import React from "react";

// import { HamburgerIcon } from "@chakra-ui/icons";

import { Box, Link as ChakraLink, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMedal } from "react-icons/fa";
import { GiCorkscrew } from "react-icons/gi";
import {
  MdDashboard,
  MdLogout,
  MdNotifications,
  MdOutlineSettings,
  MdPayments,
  MdPerson,
  // MdReceiptLong,
} from "react-icons/md";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const toggleIsOpen = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const menuItem = [
    {
      id: "dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    // {
    //   id: "revenue",
    //   path: "/dashboard/revenue",
    //   icon: <MdReceiptLong />,
    // },
    {
      id: "equipments",
      path: "/dashboard/initialEquipments",
      icon: <GiCorkscrew />,
    },
    {
      id: "certificates",
      path: "/dashboard/cetificates",
      icon: <FaMedal />,
    },
    // {
    //   id: "reports",
    //   path: "/dashboard/reports",
    //   icon: <FaClipboardList />,
    // },
    {
      id: "payments",
      path: "/dashboard/payments",
      icon: <MdPayments />,
    },
  ];

  return (
    <VStack
      as="nav"
      position="static"
      left="0"
      top="0"
      w="200px"
      h="100vh"
      // w={isOpen ? "200px" : "65px"}
      // pl={isOpen ? "6" : "4"}
      pl="10"
      pt="10px"
      pb="5px"
    //   bgColor="brand.50"
      alignItems="start"
      boxShadow='lg'
      transition="width 0.3s"
//       className="
//    bg-light flex flex-col items-start pl-10 pt-44   pb-14"
    >
      {/* <Box
        className=" hover:bg-green rounded-lg cursor-pointer items-center justify-center flex p-2 mb-2 hover:text-white"
        onClick={toggleIsOpen}
      >
        <Icon as={HamburgerIcon} aria-label="Toggle Sidebar" />
      </Box> */}

      <VStack align="start" spacing="4">
        <Box>
          {menuItem.map((item, index) => (
            <ChakraLink
              as={Link}
              href={item.path}
              key={index}
              style={{ textDecoration: "none" }}
              color="brand.700"
              bgColor="brand.100"
              rounded="20px"
              pr="4px"
              mt="2px"
              justifyContent="start"
              alignItems="center"
              py="3px"
              // className={`${isOpen ? "pr-8" : "pr-2  mt-3"}  hover:bg-green hover:text-white  rounded-xl  flex gap-4 justify-start items-center py-2  pl-2 font-semibold`}
              // onClick={toggleIsOpen}
            //   className={` ${
            //     pathname === item.path ? "bg-green text-white" : ""
            //   }  hover:text-black  rounded-xl  flex gap-4 justify-start items-center py-2  pl-2 text-gray-600 font-semibold pr-8`}
            >
              {item.icon}
              {/* // className={`${isOpen ? "block" : "hidden"}  */}
           ={item.id} 
            </ChakraLink>
          ))}
          {/* <Box className="pt-10 mt-10 border-t border-gray-400">
            <ChakraLink
              as={Link}
              style={{ textDecoration: "none" }}
              color="gray-600"
              href="#"
              className={` ${
                pathname === "/dashboard/settings" ? "bg-green text-white" : ""
              }  hover:text-black  rounded-xl  flex gap-4 justify-start items-center py-2  pl-2 text-gray-600 font-semibold pr-8`}
            >
              <MdOutlineSettings />
              <FormattedMessage id="settings" />
            </ChakraLink>
            <ChakraLink
              as={Link}
              style={{ textDecoration: "none" }}
              color="gray-600"
              href="#"
              className={` ${
                pathname === "/dashboard/notifications"
                  ? "bg-green text-white"
                  : ""
              }  hover:text-black  rounded-xl  flex gap-4 justify-start items-center py-2  pl-2 text-gray-600 font-semibold pr-8`}
            >
              <MdNotifications />
              <FormattedMessage id="notifications" />
            </ChakraLink>
          </Box> */}
          <Box className="pt-10 mt-10 border-t border-gray-400  ">
            
            <ChakraLink
              as={Link}
              style={{ textDecoration: "none" }}
              color="red"
              href="#"
              className={` ${
                pathname === "/dashboard/logout" ? "bg-green text-white" : ""
              }  hover:text-black  rounded-xl  flex gap-4 justify-start items-center py-2  pl-2 font-semibold pr-8`}
            >
              <MdLogout />
             logout
            </ChakraLink>
          </Box>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Sidebar;
