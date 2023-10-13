import { Anton } from 'next/font/google'
import { Flex, Box, Text, Image, HStack, VStack, Heading, Divider, useMediaQuery } from "@chakra-ui/react";

const anton = Anton({ weight: '400', preload: false })

function DataSourcing() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  return (
    <Flex
      flexFlow={{
        base: 'column',
        md: 'row'
      }}
      justifyContent="space-between" w="100%" my="48px"
      p={{
        base: '24px',
        md: '48px'
      }} borderRadius="md" bg="#F3F4F0" h={{ base: 'auto', md: '600px' }}>
      <Flex flexFlow="column" w={{
        base: '100%',
        md: '48%'
      }}
        order={{
          base: 2,
          md: 1
        }}
        h="100%">
        <Heading flex={{
          base: 0,
          md: 1
        }} className={anton.className} fontSize={{
          base: '40px',
          md: '60px'
        }}
          my={{
            base: '24px',
            md: '0px'
          }}>
          Data Sourcing
        </Heading>
        <Text fontSize="xl">
          Through our top rated mobile apps, our community of vetted consumer panelists proactively contribute transaction documents including receipts, digital accounts, paychecks, emails, and more.  Our high retention rate and rigorous vetting process enables some of the highest quality longitudinal research in the industry.
        </Text>
        {isLargerThan768 ? (
          <HStack w="100%" mt="48px" py={3} bg="#E7E9E5" textAlign='center'>
            <Flex flexFlow="column" alignItems="center" w="33%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">150k</Text>
              <Text>Panelists</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="33%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">6M</Text>
              <Text>Documents processed</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="33%">
              <Text>Avg.</Text>
              <Text fontWeight="bold" fontSize="2xl">4.8</Text>
              <Text>App store rating</Text>
            </Flex>
          </HStack>
        ) : (
            <VStack w="100%" mt="48px" py={3} bg="#E7E9E5" textAlign='center' divider={<Divider bg="#BABCBB" />}>
            <Flex flexFlow="column" alignItems="center" w="100%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">150k</Text>
              <Text>Panelists</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="100%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">6M</Text>
              <Text>Documents processed</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="100%">
              <Text>Avg.</Text>
              <Text fontWeight="bold" fontSize="2xl">4.8</Text>
              <Text>App store rating</Text>
            </Flex>
          </VStack>
        )}
      </Flex>
      <Flex w={{
        base: '100%',
        md: '48%'
      }}
        order={{
          base: 1,
          md: 2
        }}
        h="100%">
        <Image
          src="/data_sourcing.png"
          alt="Data Sourcing"
          w="100%"
          h="100%"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>
    </Flex>
  )
}

export default DataSourcing;
