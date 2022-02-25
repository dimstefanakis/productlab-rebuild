import { Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { RichText } from "prismic-reactjs";

function BlogPost({ post }: any) {
  return (
    <Flex>
      <RichText />
    </Flex>
  );
}

export default BlogPost;
