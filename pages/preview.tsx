import { Flex } from "@chakra-ui/layout";
import { Blog } from "../slices";
import MySliceMocks from "../.slicemachine/assets/slices/Blog/mocks.json";

function Preview() {
  return <Blog slice={MySliceMocks[0]} />;
}

export default Preview;
