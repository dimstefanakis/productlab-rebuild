import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";

function SideBar() {
  return (
    <Flex
      minW="100px"
      h="100vh"
      borderRight="1px solid #C4C4C4"
      justifyContent="center"
    >
      <Image src="/productlab_logo.png" h="30px" w="30px" mt="spacer-03" />
    </Flex>
  );
}

export default SideBar;
