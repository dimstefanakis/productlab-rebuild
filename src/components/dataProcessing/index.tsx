import { Anton } from 'next/font/google'
import { Flex, Box, Text, Image, HStack, VStack, Heading, Divider, useMediaQuery } from "@chakra-ui/react";

const anton = Anton({ weight: '400', preload: false })

function DataProcessing() {
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
      <Flex w={{
        base: '100%',
        md: '48%'
      }}
        order={{
          base: 2,
          md: 1
        }}
        h="100%">
        <Image
          src="/data_processing.png"
          alt="Data Processing"
          w="100%"
          h="100%"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>
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
        }} className={anton.className}
          fontSize={{
            base: '40px',
            md: '60px'
          }}
          my={{
            base: '24px',
            md: '0px'
          }}>
          Data Processing
        </Heading>
        <Text fontSize="xl">
          We use machine learning to transform data into reliable structured datasets delivered 24/7 directly to data science leaders through AWS, BigQuery, SnowFlake, and custom data feeds.
        </Text>
        {isLargerThan768 ? (
          <HStack w="100%" mt="48px" py={3} bg="#E7E9E5">
            <Flex flexFlow="column" alignItems="center" w="33%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">99%</Text>
              <Text>SLA</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="33%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">500M</Text>
              <Text>Data points</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="33%">
              <Text>Avg.</Text>
              <Text fontWeight="bold" fontSize="2xl">50</Text>
              <Text>Document types</Text>
            </Flex>
          </HStack>
        ) : (
          <VStack w="100%" mt="48px" py={3} bg="#E7E9E5" divider={<Divider bg="#BABCBB" />}>
            <Flex flexFlow="column" alignItems="center" w="100%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">99%</Text>
              <Text>SLA</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="100%">
              <Text>Over</Text>
              <Text fontWeight="bold" fontSize="2xl">500M</Text>
              <Text>Data points</Text>
            </Flex>
            <Flex flexFlow="column" alignItems="center" w="100%">
              <Text>Avg.</Text>
              <Text fontWeight="bold" fontSize="2xl">50</Text>
              <Text>Document types</Text>
            </Flex>
          </VStack>
        )}
      </Flex>
    </Flex>
  )
}

export default DataProcessing;
