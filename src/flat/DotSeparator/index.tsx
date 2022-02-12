import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { DotSeparatorProps } from "./interface";

function DotSeparator({ title }: DotSeparatorProps) {
  return (
    <Box position="relative" w="100%">
      <Image w="100%" src="/thing.svg" />
    </Box>
  );
}

export default DotSeparator;
