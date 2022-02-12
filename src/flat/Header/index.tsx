import { Flex, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import Menu from "../../features/Menu";
import styles from './Header.module.css';

function Header() {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      p="spacer-03"
      px="spacer-04"
      pl={isSmallerThan768 ? 'spacer-03' : '148px'}
      borderColor="border.100"
      className={styles.header}
    >
      <Text>PRODUCTLAB</Text>
    </Flex>
  );
}

export default Header;
