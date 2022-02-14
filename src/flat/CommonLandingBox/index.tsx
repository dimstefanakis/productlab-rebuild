import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../PrimaryButton";
import { CommonLandingBoxProps } from "./interface";

function CommonLandingBox({
  title,
  subheader,
  buttonText,
  rightSideComponent,
  withBorder,
}: CommonLandingBoxProps) {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      minH="100vh"
      w="100%"
      borderLeft={isSmallerThan768 ? "0" : "1px solid"}
      borderBottom={withBorder ? "1px solid" : "0"}
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
        <Heading fontSize="5xl">{title}</Heading>
        <Box flex="1"></Box>
        <Text maxW="350px">{subheader}</Text>
        <Box mt="spacer-03">
          <PrimaryButton width={isSmallerThan768 ? '100%' : 'max-content'}>{buttonText}</PrimaryButton>
        </Box>
      </Flex>
      <Flex
        w={{ base: "100%", md: "60%" }}
        maxW={{ base: "100%", md: "60%" }}
        p={{ base: 3, md: "spacer-06" }}
        pr={0}
      >
        {rightSideComponent}
      </Flex>
    </Flex>
  );
}

export default CommonLandingBox;
