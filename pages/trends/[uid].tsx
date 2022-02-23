import { useRouter } from "next/router";
import { Flex, Box } from "@chakra-ui/layout";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Client from "../../prismicHelpers";

function BlogPostPage({ post }: any) {
  console.log("post", post);
  return <Flex flexFlow="column"></Flex>;
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
