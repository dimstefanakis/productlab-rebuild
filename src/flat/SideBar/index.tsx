import { useContext } from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../../features/Menu";
import Logo from "../Logo";
import { RootState } from "../../store";

function SideBar() {
  const { open } = useSelector((state: RootState) => state.menu);

  return (
    <Flex
      minW="100px"
      h="100vh"
      justifyContent="center"
      bg="white"
      zIndex="10"
      position="sticky"
      top="0"
    >
      <Logo
        color={open ? "white" : "#137CDE"}
        h="30px"
        w="30px"
        mt="spacer-03"
        position="absolute"
      />
      {/* <Image src="/productlab_logo.svg" /> */}
      <Box alignSelf="center">
        <Menu />
      </Box>
    </Flex>
  );
}

export default SideBar;
