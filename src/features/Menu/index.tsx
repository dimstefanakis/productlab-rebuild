import { useState } from "react";
import { useTheme } from "@chakra-ui/system";
import { useMediaQuery } from "@chakra-ui/media-query";
import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

function Menu() {
  const theme = useTheme();
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const [isVisible, setVisible] = useState(false);
  let transitionProps;
  if (isSmallerThan768) {
    transitionProps = {
      initial: {
        opacity: 0,
        y: "-100%",
      },
      animate: {
        opacity: 1,
        y: "0%",
      },
      exit: {
        opacity: 0,
        y: "-100%",
      },
    };
  }else{
    transitionProps = {
      initial: {
        opacity: 0,
        x: "-100%",
      },
      animate: {
        opacity: 1,
        x: "0%",
      },
      exit: {
        opacity: 0,
        x: "-100%",
      },
    };
  }
  function onMenuClick() {
    setVisible(!isVisible);
  }

  return (
    <>
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
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
