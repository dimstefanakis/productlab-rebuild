import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { DotSeparatorProps } from "./interface";

function DotSeparator({ title }: DotSeparatorProps) {
  return (
    <Box position="relative" h="400px" w="100%">
      <Image w="100%" h="100%" src="/thing.svg" />
    </Box>
  );
}

export default DotSeparator;
