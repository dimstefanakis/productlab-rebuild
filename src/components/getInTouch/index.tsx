import { Anton } from 'next/font/google'
import { Flex, Box, Text, Image, Heading, Button } from "@chakra-ui/react";
import useMediaQuery from '@/app/hooks/useMediaQuery';
import { Link as ChakraLink } from "@chakra-ui/layout";

const anton = Anton({ weight: '400', preload: false })

function GetInTouch() {
  const isLargerThan768 = useMediaQuery("(min-width: 768px)")
  return (
    <Flex w="100%" flexFlow="column" alignItems="center">
      <Heading className={anton.className} fontSize={{
        base: '40px',
        md: '60px'
      }} w="100%" maxW="900px" textAlign="center" mt={{
        base: '48px',
        md: '96px'
      }}>
        Get In Touch
      </Heading>
      <ChakraLink
        href="#hs-chat-open"
      >
        <Button mt="24px" py={6} borderRadius="full" colorScheme="blue">
          Contact Us
        </Button>
      </ChakraLink>
      <Image
        src={isLargerThan768 ? "/dots.png" : "/small-dots.png"}
        alt="dots"
        w="100%"
        my="32px"
      />
    </Flex>
  )
}

export default GetInTouch;
