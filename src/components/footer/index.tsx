import { Flex, Box, Text, Link, Icon, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex mx="-24px"
      direction={isMobile ? "column" : "row"}
      justifyContent={isMobile ? 'space-between' : 'auto'}
      alignItems="center" py={10} px={6} bg="gray.200">
      {isMobile ? (
        // vertical grid, 2 items per row. It should be 3 rows
        <Grid templateAreas={`
        "privacy info"
        "terms contact"
        "li tw"
        "copywrite copywrite"`}
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(4, 1fr)"
          gap={6}>

          <GridItem display="flex" justifyContent="center" alignItems="center" gridArea="privacy">
            <Link href="/privacy">Privacy</Link>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center" gridArea="terms">
            <Link href="/terms">Terms & Conditions</Link>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center" gridArea="contact">
            <Link href="#hs-chat-open">Contact Us</Link>
          </GridItem>
          <GridItem display="flex" textAlign="center" justifyContent="center" alignItems="center" gridArea="info">
            <Link>Do Not Sell Info</Link>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center" gridArea="li">
            <Link href="https://www.linkedin.com/company/productlabai" isExternal>
              <Icon as={FaLinkedin} />
            </Link>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center" gridArea="tw">
            <Link href="https://twitter.com/productlabai" isExternal>
              <Icon as={FaTwitter} />
            </Link>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center" gridArea="copywrite">
            <Text>
              © ProductLab. All Rights Reserved
            </Text>
          </GridItem>

        </Grid>
      ) : <>
        <Box flex="1" my={{
          base: '12px',
          md: '0'
        }}>
          <Text>
            © ProductLab. All Rights Reserved
          </Text>
        </Box>
        <Box display={isMobile ? "flex" : "block"} justifyContent="space-between">
          <Link href="/privacy" mr={4}>Privacy</Link>
          <Link href="/terms" mr={4}>Terms and Conditions</Link>
        </Box>
        <Box display={isMobile ? "flex" : "block"} justifyContent="space-between">
          <Link mr={4}>Do Not Sell Info</Link>
          <Link href="#hs-chat-open">Contact Us</Link>
        </Box>
        <Box display="flex" justifyContent="space-between" mx={4}>
          <Link href="https://twitter.com/productlabai" isExternal mr={2}>
            <Icon as={FaTwitter} />
          </Link>
          <Link href="https://www.linkedin.com/company/productlabai" isExternal>
            <Icon as={FaLinkedin} />
          </Link>
        </Box>

      </>}
    </Flex>
  );
}

export default Footer;

