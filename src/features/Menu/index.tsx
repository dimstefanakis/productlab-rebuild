import { useState, useContext, useEffect } from "react";
import { useTheme } from "@chakra-ui/system";
import { useMediaQuery } from "@chakra-ui/media-query";
import { IconButton } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import HeaderWrapper from "../../flat/Header/Wrapper";
import MenuContext from "../../context/MenuContext";
import SectionButton from "./Buttons/SectionButton";
import ReportBox from "./Buttons/ReportBox";
import MenuFooter from "./Footer";

function Menu() {
  const theme = useTheme();
  const menuContext = useContext(MenuContext);
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const [isVisible, setVisible] = useState(false);

  let transitionProps;

  if (isSmallerThan768) {
    transitionProps = {
      initial: {
        y: "-100%",
      },
      animate: {
        y: "0%",
      },
      exit: {
        y: "-100%",
      },
    };
  } else {
    transitionProps = {
      initial: {
        x: "-100%",
      },
      animate: {
        x: "0%",
      },
      exit: {
        x: "-100%",
      },
    };
  }
  function onMenuClick() {
    setVisible(!isVisible);
  }

  return (
    <MenuContext.Provider value={{ open: isVisible, setOpen: setVisible }}>
      <IconButton
        size="lg"
        aria-label="Menu"
        colorScheme="whiteAlpha"
        backgroundColor="transparent"
        icon={
          isVisible ? (
            <CloseIcon
              h="30px"
              w="30px"
              color={isVisible ? "white" : "black"}
            />
          ) : (
            <HamburgerIcon
              h="30px"
              w="30px"
              color={isVisible ? "white" : "black"}
            />
          )
        }
        onClick={onMenuClick}
      ></IconButton>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            transition={{ duration: 0.3 }}
            style={{
              minHeight: "100vh",
              width: "100vw",
              position: "fixed",
              backgroundColor: theme.colors.brand["100"],
              left: 0,
              top: 0,
              zIndex: -1,
            }}
            {...transitionProps}
          >
            <Flex h="100vh" flexFlow="column" color="white">
              <HeaderWrapper position="relative" />
              <Flex
                h="calc(100% - 70px)"
                ml="100px"
                borderLeft="1px solid"
                borderColor="border.100"
                flexFlow="column"
              >
                <Flex w="100%" h="40%">
                  <Flex w="60%" flexFlow="column">
                    <SectionButton title="Trend Reports" />
                    <SectionButton title="Solutions" />
                  </Flex>
                  <ReportBox backgroundColor="brand.200" />
                </Flex>
                <Flex w="100%" h="40%">
                  <Flex w="60%" flexFlow="column">
                    <SectionButton title="Our Panel" />
                    <SectionButton title="Sign Up" />
                  </Flex>
                  <ReportBox backgroundColor="brand.300" />
                </Flex>
                <MenuFooter />
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </MenuContext.Provider>
  );
}

export default Menu;
