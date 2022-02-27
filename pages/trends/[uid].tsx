import { Fragment } from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Client from "../../prismicHelpers";
import styles from "./Blog.module.css";

function BlogPostPage({ post }: any) {
  console.log("post", post);
  let data = post.data;
  let publicationDate = new Date(post.last_publication_date)
    .toLocaleString("en-us", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2");
  console.log("pub", publicationDate);
  return (
    <Flex
      w="100%"
      mt="100px"
      justifyContent="center"
      alignItems="center"
      flexFlow="column"
      p={4}
    >
      <Flex
        w="100%"
        justifyContent="center"
        borderBottom="1px solid"
        borderColor="border.100"
      >
        <Flex flexFlow="column" maxW="600px">
          <Heading>{data.title}</Heading>
          <Text mt={3} color="gray">{publicationDate}</Text>
          <Image w="100%" src={data.previewimage.url} my="spacer-04" />
        </Flex>
      </Flex>
      <Flex
        flexFlow="column"
        mt="spacer-04"
        maxW="600px"
        className={styles.blogContainer}
      >
        {data.slices.map((slice: any, i: number) => {
          if (slice.slice_type == "blog_text") {
            return (
              <Fragment key={i}>
                <RichText render={slice.primary.body} />
              </Fragment>
            );
          }
          if (slice.slice_type == "blog_image") {
            return (
              <Flex w="100%" flexFlow="column" alignItems="center" my={4}>
                <Text as="q" fontStyle="italic" mb={3}>{slice.primary.imageTitle}</Text>
                <Image src={slice.primary.image.url} />
                <Text fontSize="sm" color="gray" mt={3}>
                  {slice.primary.imageDescription}
                </Text>
              </Flex>
            );
          }
        })}
      </Flex>
    </Flex>
  );
}

export async function getStaticProps({ params }: any) {
  const post = await Client().getByUID("blog-post", params.uid, {});

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const docs = await Client().query(
    Prismic.Predicates.at("document.type", "blog-post")
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
