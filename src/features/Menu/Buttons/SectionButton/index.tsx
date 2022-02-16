import { Flex, Box, Text } from "@chakra-ui/layout";
import { SectionButtonProps } from "./interface";
import { motion, AnimatePresence } from "framer-motion";

function SectionButton(props: SectionButtonProps) {
  return (
    <Flex
      w="100%"
      h={{ base: "auto", md: "50%" }}
      // pl={10}
      borderBottom="1px solid"
      borderColor="border.100"
      alignItems="center"
      {...props}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ delay: 0.3 }}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text fontWeight="bold" fontSize="6xl" py="spacer-05" pl={10}>
            {props.title}
          </Text>
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
}

export default SectionButton;
