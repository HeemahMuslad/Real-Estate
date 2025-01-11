"use client";

import React from "react";

import { Box } from "@chakra-ui/react";

// import Footer from "@components/Footer";
// import Header from "@components/Header";
import Sidebar from "./components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box className="flex ">
        <Sidebar />
        <Box className="flex-1 flex flex-col overflow-hidden">
          {/* <Header /> */}
          <Box
            as="main"
            flex="1"
            p={4}
            ml={{ base: "20px" }}
            mt="160px"
            className="z-0 flex "
          >
            {children}
          </Box>
          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
