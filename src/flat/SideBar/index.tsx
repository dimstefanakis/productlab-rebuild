import { Image } from "@chakra-ui/image";
import { Flex, Box } from "@chakra-ui/layout";
import Menu from "../../features/Menu";

function SideBar() {
  return (
    <Flex
      minW="100px"
      h="100vh"
      justifyContent="center"
      bg="white"
      zIndex="10"
      position="relative"
    >
      <Image
        src="/productlab_logo.png"
        h="30px"
        w="30px"
        mt="spacer-03"
        position="absolute"
      />
      <Box alignSelf="center">
        <Menu />
      </Box>
    </Flex>
  );
}

export default SideBar;
