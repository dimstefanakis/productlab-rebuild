import { useRouter } from "next/router";
import { Image } from "@chakra-ui/image";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import Prismic from "@prismicio/client";
import { useTheme } from "@chakra-ui/system";
// import { useMediaQuery } from "@chakra-ui/media-query";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import useUpdatePreviewRef from "../../src/utils/useUpdatePreviewRef";
import { RichText } from "prismic-reactjs";
import Client from "../../prismicHelpers";
import Hero from "../../src/flat/Hero";
import SideBar from "../../src/flat/SideBar";
import Footer from "../../src/flat/Footer";
import PreviewLoader from "../../src/flat/PreviewLoader";
import Custom404 from "../404";
import { TrendRightSideComponentProps } from "./interface";
import styles from "./Blog.module.css";

function BlogPostPage({ post, previewRef }: any) {
  const { breakpoints } = useTheme();
  const router = useRouter();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  useUpdatePreviewRef(previewRef, post?.id);

  if (router.isFallback) {
    return <PreviewLoader />;
  }

  if (!post?.id) {
    return <Custom404 />;
  }

  let data = post.data;
  let publicationDate = new Date(post.last_publication_date)
    .toLocaleString("en-us", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2");

  return (
    <>
      {!isSmallerThan768 && <SideBar />}
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexFlow="column"
      >
        <Hero
          title={data.title}
          rightSideComponent={
            <TrendRightSideComponent previewImageUrl={data.previewimage.url} />
          }
        />
        <Flex flexFlow="column" w="100%" className={styles.blogContainer}>
          {data.slices.map((slice: any, i: number) => {
            if (slice.slice_type == "blog_text") {
              return (
                <Flex
                  key={i}
                  p={{ base: 5, md: 20 }}
                  borderTop={i == 0 ? "1px solid" : "none"}
                  borderLeft="1px solid"
                  borderBottom="1px solid"
                  borderColor="border.100"
                >
                  <RichText render={slice.primary.body} />
                </Flex>
              );
            }
            if (slice.slice_type == "blog_image") {
              return (
                <Flex
                  key={i}
                  p={{ base: 5, md: 20 }}
                  flexFlow="column"
                  justifyContent="center"
                  alignItems="center"
                  borderTop={i == 0 ? "1px solid" : "none"}
                  borderLeft="1px solid"
                  borderBottom="1px solid"
                  borderColor="border.100"
                >
                  <Text as="q" fontStyle="italic" mb={3}>
                    {slice.primary.imageTitle}
                  </Text>
                  <Image src={slice.primary.image.url} />
                  <Text fontSize="sm" color="gray" mt={3}>
                    {slice.primary.imageDescription}
                  </Text>
                </Flex>
              );
            }
          })}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}

function TrendRightSideComponent({
  previewImageUrl,
}: TrendRightSideComponentProps) {
  return (
    <Flex
      flex="1"
      pt={{ base: 0, md: "50px" }}
      justifyContent="center"
      alignItems="center"
    >
      <Image src={previewImageUrl} h="100%" objectFit="cover"></Image>
    </Flex>
  );
}

export async function getStaticProps({ params, previewData }: any) {
  const previewRef = previewData && previewData.ref ? previewData.ref : null;
  const refOption = previewRef ? { ref: previewRef } : { ref: null };
  const post =
    (await Client().getByUID("blog-post", params.uid, refOption)) || {};

  return {
    props: {
      post,
      previewRef,
    },
  };
}

export async function getStaticPaths() {
  const docs = await Client().query(
    Prismic.Predicates.at("document.type", "blog-post")
  );

  return {
    paths: docs.results.map((doc) => {
      return { params: { uid: doc.uid?.toString() } };
    }),
    fallback: true,
  };
}
export default BlogPostPage;
