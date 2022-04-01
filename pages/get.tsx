import { Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useTheme } from "@chakra-ui/system";
import Footer from "../src/flat/Footer";
import SideBar from "../src/flat/SideBar";
import useMediaQuery from "../src/hooks/useMediaQuery";

function GetPage() {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex>
      {!isSmallerThan768 && <SideBar />}
      <Flex flexFlow="column">
        <Flex
          width={{ base: "100vw", md: "100%" }}
          justifyContent="center"
          alignItems="center"
          borderLeft="1px solid"
          borderColor="border.100"
          flexFlow="column"
          pb="spacer-06"
        >
          <Heading mt="100px">Welcome to ProductLab</Heading>
          <Text>Scan this QR code to get the app!</Text>
          <Image
            src="/get_app_qr.png"
            maxW="300px"
            mt={10}
            objectFit="contain"
          />
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}

export default GetPage;
