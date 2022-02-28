import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Flex, Heading, Text, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useTheme } from "@chakra-ui/system";
// import { useMediaQuery } from "@chakra-ui/media-query";
import Logo from "../Logo";
import BookDemo from "../../features/BookDemo";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FooterLinkProps } from "./interface";

function Footer() {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return isSmallerThan768 ? (
    <MenuFooter />
  ) : (
    <Flex position="relative" width="100%" color="white">
      <Image src="/thing3.svg" width="100%" />
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        flexFlow="column"
      >
        <Flex
          flexFlow="row"
          flex="1"
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="border.100"
        >
          <Flex
            w="60%"
            h="100%"
            borderRight="1px solid"
            borderColor="border.100"
            flexFlow="column"
            py="spacer-05"
            px={{ base: "spacer-03", md: 10 }}
          >
            <Heading fontSize={{ base: "4xl", md: "6xl" }} maxW="600px">
              Instant clarity for your next decision
            </Heading>
            <BookDemoWrapper />
          </Flex>
        </Flex>
        <Flex
          flexFlow="row"
          height="100px"
          borderLeft="1px solid"
          borderColor="border.100"
        >
          <Flex
            w="60%"
            h="100%"
            borderRight="1px solid"
            borderColor="border.100"
            flexFlow="row"
            alignItems="center"
            px={{ base: "spacer-03", md: 10 }}
          >
            <Flex justifyContent="center" alignItems="center">
              <Logo color="white" width="20px" height="20px" />
              <Heading fontSize="xl" ml={4}>
                PRODUCTLAB
              </Heading>
            </Flex>
            <Box flex="1"></Box>
            <FooterLinks />
          </Flex>
          <Flex
            w="40%"
            h="100%"
            px={{ base: "spacer-03", md: 10 }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Copywrite />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function MenuFooter() {
  return (
    <Flex
      w="100%"
      backgroundColor="#12233B"
      pt="spacer-05"
      color="white"
      flexFlow="column"
    >
      <Flex flexFlow="column" px="spacer-03">
        <Heading fontSize="5xl">Book A Demo Today</Heading>
        <Flex w="100%" justifyContent="center" alignItems="center">
          <BookDemoWrapper />
        </Flex>
        <Image src="/thing4.svg" w="100%" mt="spacer-04" />
      </Flex>
      <Box w="100%" borderBottom="1px solid" borderColor="border.100"></Box>
      <Flex flexFlow="column" px="spacer-03" py="spacer-04">
        <Flex justifyContent="center" alignItems="center" mb="spacer-03">
          <Logo color="white" width="20px" height="20px" />
          <Heading fontSize="xl" ml={4}>
            PRODUCTLAB
          </Heading>
        </Flex>

        <FooterLinks />
      </Flex>
    </Flex>
  );
}

function BookDemoWrapper() {
  return (
    <BookDemo
      textTransform="uppercase"
      width={{ base: "100%", md: "max-content" }}
      border="1px solid"
      borderColor="border.100"
      color="white"
      backgroundColor="transparent"
      borderRadius="100px"
      mt="spacer-04"
      px={20}
      _hover={{
        backgroundColor: "transparent",
      }}
      _active={{
        backgroundColor: "transparent",
      }}
    ></BookDemo>
  );
}

function FooterLinks() {
  return (
    <Flex justifyContent={{ base: "space-between", md: "center" }}>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/terms">Terms</FooterLink>
      <FooterLink href="/privacy">Privacy</FooterLink>
    </Flex>
  );
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link href={href}>
      <ChakraLink
        href={href}
        ml={{ base: 0, md: 8 }}
        color="brand.100"
        fontWeight="bold"
      >
        {children}
      </ChakraLink>
    </Link>
  );
}

function Copywrite() {
  return <Text>© Product Lab aI, Inc 2022 All rights reserved</Text>;
}

export default Footer;
