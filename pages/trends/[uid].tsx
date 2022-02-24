import { Image } from "@chakra-ui/image";
import { Flex, Box, Heading } from "@chakra-ui/layout";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Client from "../../prismicHelpers";
import styles from './Blog.module.css';

function BlogPostPage({ post }: any) {
  console.log("post", post);
  let data = post.data;
  return (
    <Flex
      w="100%"
      mt="100px"
      justifyContent="center"
      alignItems="center"
      flexFlow="column"
    >
      <Flex
        w="100%"
        justifyContent="center"
        borderBottom="1px solid"
        borderColor="border.100"
      >
        <Flex flexFlow="column" w="600px">
          <Heading>{data.title}</Heading>
          <Image w="100%" src={data.previewimage.url} my="spacer-04" />
        </Flex>
      </Flex>
      <Flex
        flexFlow="column"
        mt="spacer-04"
        w="600px"
        className={styles.blogContainer}
      >
        <RichText render={data.blog_body} />
      </Flex>
    </Flex>
  );
}

export async function getStaticProps({ params }: any) {
  const post = await Client().getByUID("bl", params.uid, {});

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const docs = await Client().query(
    Prismic.Predicates.at("document.type", "bl")
  );

  console.log("docs", docs);
  return {
    paths: docs.results.map((doc) => {
      return { params: { uid: doc.uid?.toString() } };
    }),
    fallback: false,
  };
}
export default BlogPostPage;
