import { Flex ,Text} from '@chakra-ui/react';
import CTASection from "~/lib/components/samples/CTASection";
import SomeImage from "~/lib/components/samples/SomeImage";
import SomeText from "~/lib/components/samples/SomeText";

const Home = () => {
  return (
    // <Fragment>
    //   <Text>hsndnndhhd</Text>
    // <Image src="public/image/scott-webb-1ddol8rgUH8-unsplash.jpg"/>
    // </Fragment>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Text>dhdjfjjf</Text>
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Home;
