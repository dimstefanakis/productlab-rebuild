import React, { useEffect, useState, useRef } from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import { useMediaQuery } from "@chakra-ui/media-query";
import Carousel from "../../features/Carousel";
import { TrendCarouselProps } from "./interface";
import { TrendProps } from "./interface";

function TrendCarousel({ data }: TrendCarouselProps) {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const [slideHeight, setSlideHeight] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    if (isSmallerThan768) {
      setSlideHeight(300);
    } else {
      setSlideHeight(window.innerHeight * 0.8);
    }
  }, [isSmallerThan768]);

  return (
    <Flex w="100%" maxW="100%" flexFlow="column">
      <Carousel
        gap={14}
        itemWidth={slideHeight}
        setActiveSlide={setActiveSlide}
      >
        {data.map((item: any, i: number) => {
          return (
            <Flex
              key={i}
              h={`${slideHeight}px`}
              w="500px"
              bg={i == activeSlide ? "#A4A4A4" : "#C4C4C4"}
              boxShadow={
                i == activeSlide ? "inset 0em -2em 22px -12px #797979" : ""
              }
              transition="all 0.2s"
              py="spacer-04"
              px={6}
              color="white"
            >
              <Trend data={item} index={i} />
            </Flex>
          );
        })}
      </Carousel>
    </Flex>
  );
}

function Trend({ data, index }: TrendProps) {
  console.log("data", data);
  let item = data?.items[0];

  return (
    <Flex h="100%" w="100%" flexFlow="column">
      <Heading>{index}</Heading>
      <Box flex="1"></Box>
      <Heading>{item.title}</Heading>
    </Flex>
  );
}

export default TrendCarousel;
