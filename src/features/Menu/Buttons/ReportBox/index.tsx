import { Flex, Text } from "@chakra-ui/layout";
import { FlexProps } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";

function ReportBox(props: FlexProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          height: "100%",
          width: "40%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Flex
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="border.100"
          h="100%"
          w="100%"
          {...props}
        ></Flex>
      </motion.div>
    </AnimatePresence>
  );
}

export default ReportBox;
