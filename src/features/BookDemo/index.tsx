import { Link as ChakraLink } from "@chakra-ui/layout";
import { ButtonProps } from "@chakra-ui/button";
import PrimaryButton from "../../flat/PrimaryButton";

function BookDemo(props: ButtonProps) {
  return (
    <ChakraLink
      // href="mailto:admin@productlab.ai?subject=ProductLab Demo Request"
      href="#hs-chat-open"
      // href="https://reach.productlab.ai/"
      // target={"_blank"}
      width={props.width}
      display="flex"
    >
      <PrimaryButton {...props}>Learn More</PrimaryButton>
    </ChakraLink>
  );
}

export default BookDemo;
