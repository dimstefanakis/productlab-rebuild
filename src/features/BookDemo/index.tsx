import { Link as ChakraLink } from "@chakra-ui/layout";
import { ButtonProps } from "@chakra-ui/button";
import PrimaryButton from "../../flat/PrimaryButton";

function BookDemo(props: ButtonProps) {
  return (
    <ChakraLink href="mailto:admin@productlab.ai?subject=ProductLab Demo Request" target="_blank" width={props.width}>
      <PrimaryButton {...props}>Book Demo</PrimaryButton>
    </ChakraLink>
  );
}

export default BookDemo;
