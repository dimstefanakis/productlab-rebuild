import { Box, Flex } from "@chakra-ui/layout";
import Carousel from "../../features/Carousel";

function TrendCarousel() {
  let slides = [0, 1, 2];
  return (
    <Flex w="100%" maxW="100%" flexFlow="column">
      <Carousel gap={4} itemWidth={500}>
        {slides.map((_, i) => {
          return <Flex key={i} h="500px" w="500px" bg="#A4A4A4"></Flex>;
        })}
      </Carousel>
    </Flex>
  );
}

export default TrendCarousel;
