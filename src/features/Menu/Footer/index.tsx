import { useRouter } from "next/router";
import { Flex, Text } from "@chakra-ui/layout";
// import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../../../flat/PrimaryButton";
import BookDemo from "../../BookDemo";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";

function MenuFooter() {
  const router = useRouter();
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex w="100%" flex="1">
      <Flex
        w={{ base: "100%", md: "60%" }}
        pl={{ base: 10, md: 10 }}
        pr={{ base: 10, md: 0 }}
        py={{ base: "spacer-03", md: 0 }}
        alignItems="center"
        flexFlow="row wrap"
      >
        <BookDemo
          m={2}
          width={{ base: "100%", md: "max-content" }}
          w={{ base: "100%", md: "max-content" }}
        ></BookDemo>
        <PrimaryButton
          variant="outline"
          m={2}
          w={{ base: "100%", md: "max-content" }}
          onClick={() => router.push("https://prodlab.app.link/app")}
        >
          Take Surveys
        </PrimaryButton>
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
                  © Productlab ai {new Date().getFullYear()} All rights reserved
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
