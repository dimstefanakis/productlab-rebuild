import { Flex, FlexProps, Text } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
// import { useMediaQuery } from "@chakra-ui/media-query";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { ReportBoxProps } from "./interface";

function ReportBox({ title, description, src, ...props }: ReportBoxProps) {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          height: "100%",
          width: isSmallerThan768 ? "100%" : "40%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Flex
          borderBottom="1px solid"
          borderLeft={{ base: 0, md: "1px solid" }}
          borderColor="border.100"
          minH={{base: 200, md: 0}}
          backgroundImage={src}
          backgroundSize="contain"
          h="100%"
          w="100%"
          pl={10}
          py={{base: 'spacer-03', md: 'spacer-04'}}
          flexFlow="column"
          justifyContent="space-between"
          {...props}
        >
          <Text fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
          <Text>{description}</Text>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
}

export default ReportBox;
