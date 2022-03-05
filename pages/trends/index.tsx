import { useRouter } from "next/router";
import { Flex, Text } from "@chakra-ui/layout";
import Prismic from "@prismicio/client";
import { Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useTheme } from "@chakra-ui/system";
import PrimaryButton from "../../src/flat/PrimaryButton";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import SideBar from "../../src/flat/SideBar";
import Client from "../../prismicHelpers";

interface TrendsPageProps {
  docs: any;
}

interface TrendProps {
  trend: any;
}

function TrendsPage({ docs }: TrendsPageProps) {
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <Flex w="100%">
      {!isSmallerThan768 && <SideBar />}

      <Flex
        flexFlow="column"
        pt="100px"
        w="100%"
        justifyContent="center"
        alignItems="center"
        borderLeft="1px solid"
        borderColor="border.100"
      >
        {docs.map((trend: any, i: number) => {
          return (
            <Flex
              key={i}
              w="100%"
              justifyContent="center"
              borderBottom={docs.length == i ? "0" : "1px solid"}
              borderColor="border.100"
              py="spacer-05"
            >
              <Trend trend={trend} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

function Trend({ trend }: TrendProps) {
  const router = useRouter();
  console.log("trend", trend);
  let publicationDate = new Date(trend.last_publication_date)
    .toLocaleString("en-us", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2");

  function onClick() {
    router.push(`/trends/${trend.uid}`);
  }

  return (
    <Flex
      w="100%"
      maxW="600px"
      position="relative"
      flexFlow="column"
      px={{ base: "spacer-03", md: 0 }}
    >
      <Flex
        width="100%"
        height="100%"
        maxH="400px"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={trend.data.previewimage.url}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Flex>
      <Text mt="spacer-03" color="gray">
        {publicationDate}
      </Text>
      <Heading fontSize={{ base: "2xl", md: "3xl" }} mt={2}>
        {trend.data.title}
      </Heading>
      <PrimaryButton mt={6} onClick={onClick}>
        Read more
      </PrimaryButton>
    </Flex>
  );
}

export async function getStaticProps() {
  const blog_posts = await Client().query(
    Prismic.Predicates.at("document.type", "blog-post")
  );

  return {
    props: {
      docs: blog_posts.results,
    },
  };
}

export default TrendsPage;
