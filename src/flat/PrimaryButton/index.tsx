import { Button } from "@chakra-ui/button";
import { PrimaryButtonProps } from "./interface";

function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <Button
      py={2}
      px={10}
      backgroundColor="button.100"
      color="white"
      width="fit-content"
      borderRadius="100px"
      _hover={{ bg: "button.200" }}
      _active={{
        bg: "button.200",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      textTransform="uppercase"
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
