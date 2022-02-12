import { Flex, Heading, Text } from "@chakra-ui/layout";
import TrendCarousel from "../TrendCarousel";

function Trends() {
  return (
    <Flex minH="100vh" w="100%">
      <Flex
        w="40%"
        minW="40%"
        borderRight="1px solid"
        borderColor="border.100"
        pt="spacer-06"
      >
        <Heading fontSize="5xl">Trends</Heading>
      </Flex>
      <Flex w="60%" maxW="60%" pt="spacer-06">
        <TrendCarousel />
      </Flex>
    </Flex>
  );
}

export default Trends;
