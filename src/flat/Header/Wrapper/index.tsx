import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
// import { useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/system";
import { useSelector, useDispatch } from "react-redux";
import { HeaderWrapperProps } from "./interface";
import Menu from "../../../features/Menu";
import Logo from "../../Logo";
import useMediaQuery from "../../../hooks/useMediaQuery";
import styles from "../Header.module.css";
import { RootState } from "../../../store";

function HeaderWrapper(props: HeaderWrapperProps) {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.menu);
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      p="spacer-03"
      px="spacer-04"
      pl={isSmallerThan768 ? "spacer-03" : "148px"}
      h="70px"
      borderColor="border.100"
      alignItems="center"
      bg={{ base: open ? "transparent" : "white", md: "transparent" }}
      zIndex={1}
      className={styles.header}
      {...props}
    >
      {isSmallerThan768 && (
        <Logo color={open ? "white" : "#137CDE"} h="20px" w="20px" />
        // <Image src="/productlab_logo.svg" h="20px" w="20px" />
      )}
      <Link href="/">
        <ChakraLink
          color={open ? "white" : "black"}
          href="/"
          fontWeight="bold"
          ml={{ base: 3, md: 0 }}
        >
          PRODUCTLAB
        </ChakraLink>
      </Link>
      {props.children}
    </Flex>
  );
}

export default HeaderWrapper;
