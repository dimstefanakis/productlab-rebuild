import { Flex, Box, Text, Heading } from "@chakra-ui/layout";

function Hero() {
  let text = `Access unparalleled insights and target audiences from our zero party consumer audience faster than ever. See why we are one of the fastest growing consumer panel companies in the world.`;
  return (
    <Flex w="100%" minH="100vh" px={10}>
      <Flex
        w="60%"
        borderRight="1px solid"
        borderColor="border.100"
        pt={"100px"}
        pb={"spacer-05"}
      >
        <Heading fontSize="5xl" maxW="500px">
          Zero Party Insights and Segments, in Real Time
        </Heading>
      </Flex>
      <Flex flex="1" alignItems="flex-end" p={"spacer-05"}>
        <Text>{text}</Text>
      </Flex>
    </Flex>
  );
}

export default Hero;
