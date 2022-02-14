import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../PrimaryButton";
import Menu from "../../features/Menu";
import styles from "./Header.module.css";

function Header() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      p="spacer-03"
      px="spacer-04"
      pl={isSmallerThan768 ? "spacer-03" : "148px"}
      borderColor="border.100"
      alignItems="center"
      bg={{ base: "white", md: "transparent" }}
      zIndex={{ base: 1, md: 0 }}
      className={styles.header}
    >
      {isSmallerThan768 && (
        <Image src="/productlab_logo.png" h="20px" w="20px" />
      )}
      <Text fontWeight="bold" ml={{ base: 3, md: 0 }}>
        PRODUCTLAB
      </Text>
      <Box flex="1"></Box>
      <Flex justifyContent="center" alignItems="center">
        <Contributors />
        <PrimaryButton>Book demo</PrimaryButton>
      </Flex>
    </Flex>
  );
}

function Contributors() {
  return (
    <Link href="#">
      <ChakraLink
        href="#"
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
