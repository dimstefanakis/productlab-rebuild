import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
// import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../PrimaryButton";
import BookDemo from "../../features/BookDemo";
import useMediaQuery from "../../hooks/useMediaQuery";
import { CommonLandingBoxProps } from "./interface";

function CommonLandingBox({
  title,
  titleRightComponent,
  subheader,
  buttonText,
  rightSideComponent,
  withBorder,
  id,
  onButtonClick = () => {},
}: CommonLandingBoxProps) {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      id={id}
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
        flexFlow="column"
        px={{ base: "spacer-03", md: 10 }}
        py={{ base: "spacer-04", md: "spacer-06" }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Heading fontSize="5xl">{title}</Heading>
          {titleRightComponent}
        </Flex>
        {!isSmallerThan768 && (
          <>
            <Box flex="1"></Box>
            <Text maxW="350px">{subheader}</Text>
            <Box mt="spacer-03">
              {/* <PrimaryButton width={isSmallerThan768 ? "100%" : "max-content"}>
                {buttonText}
              </PrimaryButton> */}
              {buttonText ? (
                <PrimaryButton
                  onClick={onButtonClick}
                  width={isSmallerThan768 ? "100%" : "max-content"}
                >
                  {buttonText}
                </PrimaryButton>
              ) : (
                <BookDemo
                  width={isSmallerThan768 ? "100%" : "max-content"}
                ></BookDemo>
              )}
            </Box>
          </>
        )}
      </Flex>
      <Flex
        w={{ base: "100%", md: "60%" }}
        maxW={{ base: "100%", md: "60%" }}
        p={{ base: "spacer-03", md: "spacer-06" }}
        flexFlow="column"
      >
        {rightSideComponent}
        {isSmallerThan768 && (
          <Flex flexFlow="column">
            <Box flex="1"></Box>
            <Text maxW="350px" my="spacer-04">
              {subheader}
            </Text>
            <Box mb="spacer-04">
              {/* <PrimaryButton width={isSmallerThan768 ? "100%" : "max-content"}>
                {buttonText}
              </PrimaryButton> */}
              <BookDemo
                width={isSmallerThan768 ? "100%" : "max-content"}
              ></BookDemo>
            </Box>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default CommonLandingBox;
