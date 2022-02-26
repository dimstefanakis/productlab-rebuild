import { Flex, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../../../flat/PrimaryButton";
import BookDemo from "../../BookDemo";
import { AnimatePresence, motion } from "framer-motion";

function MenuFooter() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex w="100%" flex="1">
      <Flex
        w={{ base: "100%", md: "60%" }}
        pl={{ base: 10, md: 10 }}
        pr={{ base: 10, md: 0 }}
        py={{ base: "spacer-03", md: 0 }}
        alignItems="center"
      >
        <BookDemo w={{ base: "100%", md: "max-content" }}></BookDemo>
      </Flex>
      {!isSmallerThan768 && (
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
      )}
    </Flex>
  );
}

export default MenuFooter;
