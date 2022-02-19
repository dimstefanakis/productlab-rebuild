import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Flex, Heading, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { FooterLink } from "./interface";

function Footer() {
  return (
    <Flex position="relative" width="100%" color="white">
      <Image src="thing3.svg" width="100%" />
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
            <Heading fontSize={{ base: "4xl", md: "6xl" }} maxW="500px">
              250K+
            </Heading>
            <Text>Active Contributors</Text>
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
            <Heading fontSize="xl">PRODUCTLAB</Heading>
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

function FooterLinks() {
  return (
    <Flex>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/terms">Terms</FooterLink>
      <FooterLink href="/privacy">Privacy</FooterLink>
    </Flex>
  );
}

function FooterLink({ href, children }: FooterLink) {
  return (
    <Link href={href}>
      <ChakraLink href={href} ml={8} color="brand.100" fontWeight="bold">
        {children}
      </ChakraLink>
    </Link>
  );
}

function Copywrite() {
  return <Text>© Product Lab aI, Inc 2022 All rights reserved</Text>;
}

export default Footer;
