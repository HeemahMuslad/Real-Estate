import { Box, Heading, Image, Stack, Flex, Text } from '@chakra-ui/react';

const SideImage = () => {
  return (
    <Flex bg="brand.50" w="50%" pt="20px" pb="50px" h="100%">
      <Stack w="70%" mx="auto">
        <Text color="blue" fontWeight="bold" mb="50px">
          Sewo
        </Text>
        <Box>
          <Image
            height="450px"
            width="320px"
            mb="50px"
            roundedBottomRight="70px"
            src="/assets/image/pixasquare-4ojhpgKpS68-unsplash.jpg"
            alt="img"
            objectFit="cover"
          />
        </Box>
        <Heading size="2xl">Find your sweet home</Heading>
        <Text color="brand.400">
          Schedule visit in just a few clicks
          <br /> visit in just a few clicks
        </Text>
      </Stack>
    </Flex>
  );
};

export default SideImage;
