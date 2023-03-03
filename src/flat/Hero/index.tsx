import { Flex, Box, Text, Heading } from "@chakra-ui/layout";
// import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import useMediaQuery from "../../hooks/useMediaQuery";
import PrimaryButton from "../PrimaryButton";
import BookDemo from "../../features/BookDemo";
import { HeroProps } from "./interface";

function Hero({ title, data, rightSideComponent, leftSideComponent }: HeroProps) {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      w="100%"
      minH="80vh"
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
        <Flex flexFlow="column">
          <Heading fontSize={{ base: "4xl", md: "6xl" }} maxW="600px">
            {title}
          </Heading>
          {!isSmallerThan768 && (
            <Box mt={6}>
              <BookDemo />
            </Box>
          )}
          {leftSideComponent}
        </Flex>
      </Flex>
      <Flex
        flex="1"
        flexFlow="column"
        p={{ base: "spacer-03", md: "spacer-05" }}
      >
        {rightSideComponent}
      </Flex>
    </Flex>
  );
}

export default Hero;
