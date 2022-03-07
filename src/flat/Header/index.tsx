import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
// import { useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../PrimaryButton";
import HeaderWrapper from "./Wrapper";
import Menu from "../../features/Menu";
import BookDemo from "../../features/BookDemo";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

function Header() {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <HeaderWrapper>
      {!isSmallerThan768 && (
        <>
          <Box flex="1"></Box>
          <Flex justifyContent="center" alignItems="center">
            <Contributors />
            <BookDemo/>
          </Flex>
        </>
      )}
      {isSmallerThan768 ? (
        <Flex flex="1" justifyContent="flex-end">
          <Menu />
        </Flex>
      ) : null}
    </HeaderWrapper>
  );
}

function Contributors() {
  return (
    <Link href="https://prodlab.app.link/app">
      <ChakraLink
        href="https://prodlab.app.link/app"
        fontWeight="bold"
        textTransform="uppercase"
        color="link.100"
        fontSize="md"
        textDecoration="none"
        mr={10}
      >
        Contributors
      </ChakraLink>
    </Link>
  );
}

export default Header;
