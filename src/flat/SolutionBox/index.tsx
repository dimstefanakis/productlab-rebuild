import { Flex, Box, Text } from "@chakra-ui/layout";
import { SolutionBoxProps } from "./interface";

function SolutionBox({ title }: SolutionBoxProps) {
  return (
    <Flex flexFlow="column" py={{ base: 0, md: "spacer-06" }} width="100%">
      <Text fontSize="2xl">{title}</Text>
      <Box
        height="60vh"
        width="100%"
        backgroundColor="#E7E7E7"
        mt="spacer-05"
      ></Box>
    </Flex>
  );
}

export default SolutionBox;
