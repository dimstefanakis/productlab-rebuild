// import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import { Flex, Box, Text, Heading } from "@chakra-ui/layout";
import useMediaQuery from "../../hooks/useMediaQuery";

function OurPanel() {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

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
        {isSmallerThan768 ? <Attributes /> : <ContributorDescription />}
        {isSmallerThan768 ? <ContributorDescription /> : <TasksCompleted />}
      </Flex>
    </Flex>
  );
}

function ActiveContributors() {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

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
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex
      w={{ base: "100%", md: "40%" }}
      h="100%"
      py="spacer-06"
      px={{ base: "spacer-03", md: 10 }}
      flexFlow="column"
      borderBottom={isSmallerThan768 ? "1px solid" : "0"}
      borderColor="border.100"
    >
      <Heading fontSize="5xl">500+</Heading>
      <Text>Attributes</Text>
    </Flex>
  );
}

function ContributorDescription() {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

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
        What makes us different? Our vertical platform connects you directly to an engaged consumer community providing fully permissioned data that traditional alternative data providers cannot access. We transform unstructured data into structured data streams usable by data science leaders across any organization.
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
      <Heading fontSize="5xl">2M+</Heading>
      <Text>Surveys Completed</Text>
    </Flex>
  );
}

export default OurPanel;
