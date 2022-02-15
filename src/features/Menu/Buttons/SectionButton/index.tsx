import { Flex, Box, Text } from "@chakra-ui/layout";
import { SectionButtonProps } from "./interface";

function SectionButton({ title }: SectionButtonProps) {
  return (
    <Flex
      maxH="20%"
      pl={10}
      borderBottom="1px solid"
      borderColor="border.100"
      alignItems="center"
    >
      <Text fontWeight="bold" fontSize="6xl" py="spacer-05">
        {title}
      </Text>
    </Flex>
  );
}

export default SectionButton;
