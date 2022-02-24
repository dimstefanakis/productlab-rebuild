import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/system";
import { HeaderWrapperProps } from "./interface";
import Logo from "../../Logo";
import styles from "../Header.module.css";

function HeaderWrapper(props: HeaderWrapperProps) {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      p="spacer-03"
      px="spacer-04"
      pl={isSmallerThan768 ? "spacer-03" : "148px"}
      h="70px"
      borderColor="border.100"
      alignItems="center"
      bg={{ base: "white", md: "transparent" }}
      zIndex={1}
      className={styles.header}
      {...props}
    >
      {isSmallerThan768 && (
        <Logo color="#137CDE" h="20px" w="20px" />
        // <Image src="/productlab_logo.svg" h="20px" w="20px" />
      )}
      <Link href="/">
        <ChakraLink href="/" fontWeight="bold" ml={{ base: 3, md: 0 }}>
          PRODUCTLAB
        </ChakraLink>
      </Link>
      {props.children}
    </Flex>
  );
}

export default HeaderWrapper;
