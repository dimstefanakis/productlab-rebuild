import { Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../PrimaryButton";
import BookDemo from "../../features/BookDemo";

function Hero() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  let text = `Measure the impossible with our leading zero party panel of consumers ready to collect and share insights to guide your business.`;
  return (
    <Flex
      w="100%"
      minH="100vh"
      px={{ base: 0, md: 10 }}
      flexFlow={{ base: "column", md: "row" }}
      borderLeft={isSmallerThan768 ? "0" : "1px solid"}
      borderColor="border.100"
    >
      <Flex
        w={{ base: "100%", md: "60%" }}
        borderRight={isSmallerThan768 ? "0" : "1px solid"}
        borderBottom={{ base: "1px solid", md: 0 }}
        borderColor="border.100"
        pt={"100px"}
        pb={"spacer-05"}
        px={{ base: "spacer-03", md: 0 }}
      >
        <Heading fontSize={{ base: "4xl", md: "6xl" }} maxW="500px">
          Rapid Crowdsourced Insights to Guide Any Decision
        </Heading>
      </Flex>
      <Flex
        flex="1"
        flexFlow="column"
        p={{ base: "spacer-03", md: "spacer-05" }}
        justifyContent={{ base: "center", md: "flex-end" }}
      >
        <Text>{text}</Text>
        {isSmallerThan768 && (
          <Flex my="spacer-04" justifyContent="space-around">
            <BookDemo mr={2}></BookDemo>
            <PrimaryButton variant="outline">Sign up</PrimaryButton>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Hero;
