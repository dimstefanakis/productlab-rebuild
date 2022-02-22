import { createContext } from "react";

const CarouselContext = createContext({
  handleDecrementClick: () => {},
  handleIncrementClick: () => {},
});

export default CarouselContext;
