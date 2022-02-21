import { Button } from "@chakra-ui/button";
import { PrimaryButtonProps } from "./interface";

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button
      py={2}
      px={10}
      backgroundColor={
        props.variant == "outline" ? "transparent" : "button.100"
      }
      border="2px solid"
      borderColor="#12233B"
      color={props.variant == "outline" ? "#12233B" : "white"}
      width="fit-content"
      borderRadius="100px"
      _hover={{ bg: props.variant == "outline" ? "transparent" : "button.200" }}
      _active={{
        bg: props.variant == "outline" ? "transparent" : "button.200",
        transform: "scale(0.98)",
        borderColor: "#12233B",
      }}
      textTransform="uppercase"
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default PrimaryButton;
