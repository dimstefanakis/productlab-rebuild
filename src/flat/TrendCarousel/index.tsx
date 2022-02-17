import { useEffect, useState, useRef } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import { useMediaQuery } from "@chakra-ui/media-query";
import Carousel from "../../features/Carousel";
import { TrendCarouselProps } from "./interface";

function TrendCarousel({ data }: TrendCarouselProps) {
  let slides = [0, 1, 2];
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
            <Flex key={i} h={`${slideHeight}px`} w="500px" bg="#A4A4A4"></Flex>
          );
        })}
      </Carousel>
    </Flex>
  );
}

export default TrendCarousel;
