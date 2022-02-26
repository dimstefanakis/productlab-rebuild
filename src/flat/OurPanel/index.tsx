import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import { Flex, Box, Text, Heading } from "@chakra-ui/layout";

function OurPanel() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex id="panel" minH="100vh" w="100%" flexFlow="column">
      <Flex
        flexFlow={{ base: "column", md: "row" }}
        minH={{ base: "auto", md: "50%" }}
        borderBottom="1px solid"
        borderLeft={isSmallerThan768 ? "0" : "1px solid"}
        borderColor="border.100"
      >
        <ActiveContributors />
        {isSmallerThan768 ? <TasksCompleted /> : <Attributes />}
      </Flex>
      <Flex
        flexFlow={{ base: "column", md: "row" }}
        minH={{ base: "auto", md: "50%" }}
        borderLeft={isSmallerThan768 ? "0" : "1px solid"}
        borderColor="border.100"
      >
        <ContributorDescription />
        {isSmallerThan768 ? <Attributes /> : <TasksCompleted />}
      </Flex>
    </Flex>
  );
}

function ActiveContributors() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      w={{ base: "100%", md: "60%" }}
      h="100%"
      borderRight={isSmallerThan768 ? "0" : "1px solid"}
      borderBottom={isSmallerThan768 ? "1px solid" : "0"}
      borderColor="border.100"
      flexFlow="column"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
    >
      <Heading fontSize="5xl">250K+</Heading>
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
      <Heading fontSize="5xl">500+</Heading>
      <Text>Attributes</Text>
    </Flex>
  );
}

function ContributorDescription() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      w={{ base: "100%", md: "60%" }}
      h="100%"
      borderRight={isSmallerThan768 ? "0" : "1px solid"}
      borderBottom={isSmallerThan768 ? "1px solid" : "0"}
      borderColor="border.100"
      flexFlow="column"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
    >
      <Text>
        The Productlab brand brings clarity in the consumer insights space
        through precision and simplicity. We are analytical and focus on
        function to bring you the answer you’re looking for. Through the
        distillation of the abstract, we find clarity and balance in an
        assymetrical world.
      </Text>
    </Flex>
  );
}

function TasksCompleted() {
  return (
    <Flex
      w={{ base: "100%", md: "40%" }}
      alignItems={{ base: "flex-end", md: "flex-start" }}
      h="100%"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
      flexFlow="column"
    >
      <Heading fontSize="5xl">1M+</Heading>
      <Text>Surveys Completed</Text>
    </Flex>
  );
}

export default OurPanel;
