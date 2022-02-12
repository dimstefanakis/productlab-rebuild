import { Flex, Box } from "@chakra-ui/layout";
import { LayoutProps } from "./interface";
import SideBar from "../SideBar";
import Header from "../Header";

function Layout({ children }: LayoutProps) {
  return (
    <Flex flexFlow="row" w="100%" h="100%" position="relative">
      <Header />
      <Flex w="100%">{children}</Flex>
    </Flex>
  );
}

export default Layout;
