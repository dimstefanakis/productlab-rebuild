import { Flex, Text } from "@chakra-ui/layout";

function Header() {
  return (
    <Flex
      p="spacer-03"
      px="spacer-04"
      w="100%"
      position="absolute"
      top="0"
      left="0"
      ml="100px"
      borderBottom="1px solid"
      borderColor="border.100"
    >
      <Text>PRODUCTLAB</Text>
    </Flex>
  );
}

export default Header;
