import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import TrendCarousel from "../TrendCarousel";
import PrimaryButton from "../PrimaryButton";

function Trends() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      minH="100vh"
      w="100%"
      borderLeft={isSmallerThan768 ? "0" : "1px solid"}
      borderColor="border.100"
      flexFlow={{ base: "column", md: "row" }}
    >
      <Flex
        w={{ base: "100%", md: "40%" }}
        minW={{ base: "100%", md: "40%" }}
        borderRight="1px solid"
        borderColor="border.100"
        py="spacer-06"
        flexFlow="column"
        px={{ base: "spacer-03", md: 10 }}
      >
        <Heading fontSize="5xl">Trends</Heading>
        <Box flex="1"></Box>
        <Text maxW="350px">
          Check out the latest insights from contributor data.
        </Text>
        <Box mt="spacer-03">
          <PrimaryButton>View all</PrimaryButton>
        </Box>
      </Flex>
      <Flex
        w={{ base: "100%", md: "60%" }}
        maxW={{ base: "100%", md: "60%" }}
        p={{ base: 3, md: "spacer-06" }}
        pr={0}
      >
        <TrendCarousel />
      </Flex>
    </Flex>
  );
}

export default Trends;
