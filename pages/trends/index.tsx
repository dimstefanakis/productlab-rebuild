import { useRouter } from "next/router";
import { Flex, Text, Box } from "@chakra-ui/layout";
import Prismic from "@prismicio/client";
import { Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useTheme } from "@chakra-ui/system";
import Hero from "../../src/flat/Hero";
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
  const router = useRouter();
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  function onTrendClick(id: number) {
    router.push(`/trends/${id}`);
  }

  return (
    <Flex w="100%">
      {!isSmallerThan768 && <SideBar />}

      <Flex
        flexFlow="column"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        {docs.map((trend: any, i: number) => {
          if (i == 0) {
            return (
              <Hero
                title={trend.data.title}
                leftSideComponent={
                  !isSmallerThan768 ? (
                    <BigTrendDescription trend={trend} />
                  ) : null
                }
                rightSideComponent={
                  <Flex
                    flexFlow="column"
                    width="100%"
                    height="100%"
                    pt={{ base: 0, md: "50px" }}
                  >
                    <Flex width="100%" height="100%">
                      <Image
                        src={trend.data.previewimage.url}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                      />
                    </Flex>
                    {isSmallerThan768 && (
                      <Box mt="spacer-04">
                        <BigTrendDescription trend={trend} />
                      </Box>
                    )}
                  </Flex>
                }
              />
            );
          } else {
            return (
              <Flex
                key={i}
                w="100%"
                justifyContent="center"
                borderTop="1px solid"
                borderLeft="1px solid"
                borderColor="border.100"
                py="spacer-05"
              >
                <Trend trend={trend} />
              </Flex>
            );
          }
        })}
      </Flex>
    </Flex>
  );
}

function BigTrendDescription({ trend }: any) {
  const router = useRouter();

  function onTrendClick(id: number) {
    router.push(`/trends/${id}`);
  }

  return (
    <Flex flexFlow="column" flex="1">
      <Box flex="1"></Box>
      <Box overflow="hidden">
        <Text maxW={{ base: "100%", md: "80%" }} noOfLines={3}>
          {trend.data.seodescription}
        </Text>
      </Box>
      <PrimaryButton
        variant="outline"
        mt="spacer-03"
        width={{ base: "100%", md: "max-content" }}
        onClick={() => onTrendClick(trend.uid)}
      >
        Read More
      </PrimaryButton>
    </Flex>
  );
}

function Trend({ trend }: TrendProps) {
  const router = useRouter();

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
      position="relative"
      flexFlow="column"
      px={{ base: "spacer-03", md: 10 }}
    >
      <Heading fontSize={{ base: "2xl", md: "3xl" }} mt={2}>
        {trend.data.title}
      </Heading>
      <Text mt="spacer-05" noOfLines={3} maxW="700px">
        {trend.data.seodescription}
      </Text>
      <PrimaryButton
        mt={6}
        onClick={onClick}
        variant="outline"
        width={{ base: "100%", md: "max-content" }}
      >
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
