import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import { useMediaQuery } from "@chakra-ui/media-query";
import Carousel from "../../features/Carousel";

function TrendCarousel() {
  let slides = [0, 1, 2];
  const {breakpoints} = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const [slideHeight, setSlideHeight] = useState<number>(0);

  useEffect(() => {
    if (isSmallerThan768) {
      setSlideHeight(300);
    } else {
      setSlideHeight(window.innerHeight * 0.8);
    }
  }, [isSmallerThan768]);

  return (
    <Flex w="100%" maxW="100%" flexFlow="column">
      <Carousel gap={14} itemWidth={slideHeight}>
        {slides.map((_, i) => {
          return (
            <Flex key={i} h={`${slideHeight}px`} w="500px" bg="#A4A4A4"></Flex>
          );
        })}
      </Carousel>
    </Flex>
  );
}

export default TrendCarousel;
