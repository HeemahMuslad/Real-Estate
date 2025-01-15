import React from 'react';
import { Box, Image, Text, VStack, CardProps, Flex } from '@chakra-ui/react';
import { FaLocationDot } from 'react-icons/fa6';

interface CustomCardProps extends CardProps {
  title: string;
  location: string;
  imageUrl: string;
  amount:string
}

const Card: React.FC<CustomCardProps> = ({
  title,
  location,
  imageUrl,
  amount,
  ...rest
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      //   overflow="hidden"
      boxShadow="md"
      bg="white"
      _hover={{ transform: 'scale(1.03)', transition: 'all 0.3s' }}
      {...rest}
    >
      {/* Card Image */}
      <Image src={imageUrl} alt={title} objectFit="cover" w="full" h="200px" roundedTop={"lg"} />

      {/* Card Content */}
      <VStack p={4} align="start" spacing={2}>
        <Flex align={"center"} justify={"space-between"} w="full">
          <VStack>
            <Text fontWeight="bold" fontSize="sm" noOfLines={1}>
              {title}
            </Text>
            <Flex fontSize="sm" color={'brand.400'} align={'center'} gap="2">
              <FaLocationDot color="black" />
              {location}
            </Flex>
          </VStack>
          <Text bg={"blue.100"} rounded={"lg" } p="4px" >{amount}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;
