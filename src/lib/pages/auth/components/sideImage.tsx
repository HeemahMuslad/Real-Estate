import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

const SideImage = () => {
  return (
    <Box
      h="100%"
      bg="brand.50"
      w="45%"
      pt="20px"
      pl="50px"
      pb="50px"
      color="black"
    >
      <Stack>
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
    </Box>
  );
};

export default SideImage;
