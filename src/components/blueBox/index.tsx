import { Anton } from 'next/font/google'
import { Flex, Heading, Text } from "@chakra-ui/react";

const anton = Anton({ weight: '400', preload: false })

function BlueBox() {
  return (
    <Flex my="48px"
      px={{
        base: '24px',
        md: '48px'
      }}
      py="72px" borderRadius="md" alignItems="center" flexFlow="column" bg="#137CDE">
      <Heading className={anton.className} textAlign="center" color="white"
        fontSize={{
          base: '40px',
          md: '60px'
        }}>
        Unmatched Panel & Data Integrity
      </Heading>
      <Flex flexFlow={{
        base: 'column',
        md: 'row'
      }} w="100%" mt="64px" justifyContent="space-between">
        <Flex flexFlow="column" color="white" bg="#1171C9" px="24px" py="32px" w={{
          base: '100%',
          md: '48%'
        }} borderRadius="md" alignItems="center" textAlign="center" fontSize="xl">
          <Text fontSize="36px" fontWeight="bold">
            Vetted Community
          </Text>
          <Text mt={3}>
            Experience best in class quality with our directly sourced community backed by proprietary systems that utilize facial recognition, government ID verification, and more.
          </Text>
        </Flex>
        <Flex flexFlow="column" color="white" bg="#1171C9" px="24px" py="32px"
          mt={{
            base: '32px',
            md: '0px'
          }}
          w={{
            base: '100%',
            md: '48%'
          }} borderRadius="md" alignItems="center" textAlign="center" fontSize="xl">
          <Text fontSize="36px" fontWeight="bold">
            Quality Data
          </Text>
          <Text mt={3}>
            We combine machine learning with operational processes to ensure panelists are trained to provide the right data and that our systems store and deliver information with 99.9% accuracy.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BlueBox;