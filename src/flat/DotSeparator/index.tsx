import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { DotSeparatorProps } from "./interface";

function DotSeparator({ title }: DotSeparatorProps) {
  return (
    <Box position="relative" w="100%">
      <Image w="100%" src="/thing.svg" />
      <Flex
        position="absolute"
        left="0"
        top="0"
        w="100%"
        h="100%"
        alignItems="flex-end"
        px="spacer-04"
        py="spacer-05"
      >
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="lg"
          color="white"
        >
          {title}
        </Text>
      </Flex>
    </Box>
  );
}

export default DotSeparator;
