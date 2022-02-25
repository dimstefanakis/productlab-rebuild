import { useState, useContext, useEffect } from "react";
import { useTheme } from "@chakra-ui/system";
import { useMediaQuery } from "@chakra-ui/media-query";
import { IconButton } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import HeaderWrapper from "../../flat/Header/Wrapper";
import Logo from "../../flat/Logo";
import { RootState } from "../../store";
import SectionButton from "./Buttons/SectionButton";
import ReportBox from "./Buttons/ReportBox";
import MenuFooter from "./Footer";
import { openMenu, closeMenu, toggleMenu } from "./slices/menuSlice";

function Menu() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.menu);
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  console.log("isOpen", open);
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
    dispatch(toggleMenu());
    // menuContext.setOpen(!menuContext.open);
  }

  function onSectionClick(id?: string) {
    // menuContext.setOpen(false);
    dispatch(closeMenu());

    if (id) {
      let element = document.getElementById(id);
      setTimeout(() => {
        element?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }, 300);
    }
  }

  return (
    <>
      <IconButton
        size="lg"
        aria-label="Menu"
        colorScheme="whiteAlpha"
        backgroundColor="transparent"
        icon={
          open ? (
            <CloseIcon h="30px" w="30px" color={open ? "white" : "black"} />
          ) : (
            <HamburgerIcon h="30px" w="30px" color={open ? "white" : "black"} />
          )
        }
        onClick={onMenuClick}
      ></IconButton>
      <AnimatePresence>
        {open && (
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
              {isSmallerThan768 ? (
                <MobileMenu />
              ) : (
                <Flex
                  h="calc(100% - 70px)"
                  ml="100px"
                  borderLeft="1px solid"
                  borderColor="border.100"
                  flexFlow="column"
                  overflow="auto"
                >
                  <Flex w="100%" h="40%">
                    <Flex w="60%" flexFlow="column">
                      <SectionButton
                        title="Trend Reports"
                        onClick={() => onSectionClick("trends")}
                      />
                      <SectionButton
                        title="Solutions"
                        onClick={() => onSectionClick("solutions")}
                      />
                    </Flex>
                    <ReportBox
                      title="01"
                      description="Trend Report Title"
                      backgroundColor="brand.200"
                    />
                  </Flex>
                  <Flex w="100%" h="40%">
                    <Flex w="60%" flexFlow="column">
                      <SectionButton
                        title="Our Panel"
                        onClick={() => onSectionClick("panel")}
                      />
                      <SectionButton
                        title="Sign Up"
                        onClick={() => onSectionClick()}
                      />
                    </Flex>
                    <ReportBox
                      title="02"
                      description="Trend Report Title"
                      backgroundColor="brand.300"
                    />
                  </Flex>
                  <MenuFooter />
                </Flex>
              )}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMenu() {
  const dispatch = useDispatch();

  function onSectionClick(id?: string) {
    // menuContext.setOpen(false);
    dispatch(closeMenu());

    if (id) {
      let element = document.getElementById(id);
      setTimeout(() => {
        element?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }, 300);
    }
  }
  return (
    <Flex flexFlow="column" overflow="auto">
      <SectionButton
        title="Trend Reports"
        onClick={() => onSectionClick("trends")}
      />
      <SectionButton
        title="Solutions"
        onClick={() => onSectionClick("solutions")}
      />
      <SectionButton
        title="Our Panel"
        onClick={() => onSectionClick("panel")}
      />
      <SectionButton title="Sign Up" onClick={() => onSectionClick()} />
      <MenuFooter />
      <ReportBox
        title="01"
        description="Trend Report Title"
        backgroundColor="brand.200"
      />
      <ReportBox
        title="02"
        description="Trend Report Title"
        backgroundColor="brand.300"
      />
    </Flex>
  );
}

export default Menu;
