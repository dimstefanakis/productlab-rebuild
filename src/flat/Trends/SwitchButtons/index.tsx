import { useContext } from "react";
import { IconButton } from "@chakra-ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { SwitchButtonsProps } from "./interface";
import CarouselContext from "../../../features/Carousel/context/CarouselContext";

function SwitchButtons() {
    const context = useContext(CarouselContext);

    return (
      <Flex>
        <IconButton
          isRound
          variant="outline"
          onClick={context.handleDecrementClick}
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
        />
        <IconButton
          isRound
          variant="outline"
          onClick={context.handleIncrementClick}
          icon={<ChevronRightIcon />}
          ml={3}
          aria-label="Next"
        />
      </Flex>
    );
}

export default SwitchButtons;
