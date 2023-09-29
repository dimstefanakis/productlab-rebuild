import { Anton } from 'next/font/google'
import { Flex, Box, Text, Image, Button, Heading } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react';

const anton = Anton({ weight: '400', preload: false })

function Hero() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  return (
    <Flex flexFlow="column" w="100%" minH="100vh" alignItems="center">
      <Flex w="100%" py="32px" alignItems="center">
        <Image
          src="/logo.png"
          alt="Logo"
          h="24px"
        />
        <Box flex="1"></Box>
        <Button>
          Contact Us
        </Button>
      </Flex>
      <Heading className={anton.className} fontSize={{
        base: '50px',
        md: '75px'
      }} w="100%" maxW="900px" textAlign="center" mt={{
        base: '48px',
        md: '96px'
      }}>
        Unlock Deeper Consumer Transaction Data
      </Heading>
      <Text w="100%" mt="32px" maxW="700px" color="gray.700" fontSize="xl" textAlign="center">
        Develop structured intelligence from unstructured data gathered from receipts, digital accounts, paychecks, emails, and more — all fully permissioned and compiled directly from our active community of  end consumers.
      </Text>
      <Image
        src={isLargerThan768 ? "/dots.png" : "/small-dots.png"}
        alt="dots"
        w="100%"
        my="32px"
      />
    </Flex>
  )
}

export default Hero;
