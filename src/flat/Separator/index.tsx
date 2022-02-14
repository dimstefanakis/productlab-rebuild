import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import { DotSeparatorProps } from "./interface";

function Separator({ title, src="/thing.svg" }: DotSeparatorProps) {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Box position="relative" w="100%">
      <Image
        w="100%"
        src={isSmallerThan768 ? `${src.replace(".svg", "")}_mobile.svg` : src}
      />
      <Flex
        position="absolute"
        left="0"
        top="0"
        w="100%"
        h="100%"
        alignItems="flex-end"
        px={{ base: "spacer-03", md: "spacer-04" }}
        py={{ base: "spacer-03", md: "spacer-05" }}
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

export default Separator;
