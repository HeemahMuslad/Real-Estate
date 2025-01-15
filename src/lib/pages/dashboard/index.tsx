'use client';
import React from 'react';
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import DashboardLayout from '../../layout';
import CustomIcon from './components/icon';
import Selectnput from './components/SelectInput';

import { MdDashboard } from 'react-icons/md';
import ButtonElement from '~/lib/components/Button';
import CardCarousel from "./components/Swiper"

const Dashboard = () => {
  return (
    <DashboardLayout>
      <VStack align={'start'}>
        <Heading as="h3" mb="15px">
          Find Your Best Real Estate
        </Heading>
        <VStack bg={'white'} w={'full'} h={'100vh'} rounded={'lg'} p={'20px'}>
          <Flex
            w="full"
            mb={'10px'}
            justifyContent={'space-between'}
            align={'center'}
          >
            <Flex gap="5">
              <CustomIcon as={MdDashboard} rounded="sm" />
              <Selectnput placeholder="Rent a Building" fontWeight="semibold" />
            </Flex>
            <Flex gap="5">
              <CustomIcon as={MdDashboard} rounded="sm" />
              <Selectnput placeholder="Date" fontWeight="semibold" />
            </Flex>
            <Flex gap="5">
              <CustomIcon as={MdDashboard} rounded="sm" />
              <Selectnput placeholder="Location" fontWeight="semibold" />
            </Flex>
            <ButtonElement label=" Search" w={'15%'} />
            <CustomIcon as={MdDashboard} rounded="sm" />
          </Flex>
          <Divider></Divider>
          <CardCarousel/>
        </VStack>
      </VStack>
    </DashboardLayout>
  );
};

export default Dashboard;
