import { Flex, Box, Text, Heading } from "@chakra-ui/layout";

function OurPanel() {
  return (
    <Flex minH="100vh" w="100%" flexFlow="column">
      <Flex
        flexFlow="row"
        h="50%"
        borderBottom="1px solid"
        borderLeft="1px solid"
        borderColor="border.100"
      >
        <ActiveContributors />
        <Attributes />
      </Flex>
      <Flex
        flexFlow="row"
        h="50%"
        borderLeft="1px solid"
        borderColor="border.100"
      >
        <ContributorDescription />
        <TasksCompleted />
      </Flex>
    </Flex>
  );
}

function ActiveContributors() {
  return (
    <Flex
      w="60%"
      h="100%"
      borderRight="1px solid"
      borderColor="border.100"
      flexFlow="column"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
    >
      <Heading>250K+</Heading>
      <Text>Active Contributors</Text>
    </Flex>
  );
}

function Attributes() {
  return (
    <Flex
      w="40%"
      h="100%"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
      flexFlow="column"
    >
      <Heading>500+</Heading>
      <Text>Attributes</Text>
    </Flex>
  );
}

function ContributorDescription() {
  return (
    <Flex
      w="60%"
      h="100%"
      borderRight="1px solid"
      borderColor="border.100"
      flexFlow="column"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
    >
      <Text>Active Contributors</Text>
    </Flex>
  );
}

function TasksCompleted() {
  return (
    <Flex
      w="40%"
      h="100%"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
      flexFlow="column"
    >
      <Heading>1M+</Heading>
      <Text>Tasks Completed</Text>
    </Flex>
  );
}

export default OurPanel;
