import { Flex, Text } from "@chakra-ui/layout";
import PrimaryButton from "../../../flat/PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";

function MenuFooter() {
  return (
    <Flex w="100%" flex="1">
      <Flex w="60%" pl={10} alignItems="center">
        <PrimaryButton>Book demo</PrimaryButton>
      </Flex>
      <Flex
        flex="1"
        w="40%"
        h="100%"
        borderLeft="1px solid"
        borderColor="border.100"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Flex
              w="100%"
              h="100%"
              justifyContent="center"
              alignItems="center"
              backgroundColor="brand.200"
            >
              <Text fontWeight="bold" textTransform="uppercase">
                © Productlab ai 2022 All rights reserved
              </Text>
            </Flex>
          </motion.div>
        </AnimatePresence>
      </Flex>
    </Flex>
  );
}

export default MenuFooter;
