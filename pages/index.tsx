import Head from "next/head";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useTheme } from "@chakra-ui/system";
import Prismic from "@prismicio/client";
import SideBar from "../src/flat/SideBar";
import Hero from "../src/flat/Hero";
import Separator from "../src/flat/Separator";
import Trends from "../src/flat/Trends";
import Insights from "../src/flat/Insights";
import Tasks from "../src/flat/Tasks";
import OurPanel from "../src/flat/OurPanel";
import Footer from "../src/flat/Footer";
import BookDemo from "../src/features/BookDemo";
import PrimaryButton from "../src/flat/PrimaryButton";
import { Client } from "../prismicHelpers";
import styles from "../styles/Home.module.css";

interface HomeProps {
  docs: any;
  blog_posts: any;
}

const Home = ({ docs, blog_posts }: HomeProps) => {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);
  let heroText = `Rapid Crowdsourced Insights to Guide Any Decision`;

  console.log("sliced_blog_posts", docs);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100%" h="100%">
        {!isSmallerThan768 && <SideBar />}
        <Flex flexFlow="column" className={styles.homePage}>
          <Hero
            title={heroText}
            rightSideComponent={<HeroRightSideComponent />}
          />
          <Separator title="Our blog" />
          <Trends data={docs} />
          <Separator title="Solutions" />
          <Insights />
          <Tasks />
          <Separator title="Our panel" />
          <OurPanel />
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

function HeroRightSideComponent() {
  const { breakpoints } = useTheme();
  const [isSmallerThan768] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  let text = `Measure the impossible with our leading zero party panel of consumers ready to collect and share insights to guide your business.`;
  return (
    <>
      <Flex
        flex="1"
        justifyContent={{ base: "center", md: "flex-end" }}
        flexFlow="column"
      >
        <Text>{text}</Text>
        {isSmallerThan768 && (
          <Flex my="spacer-04" justifyContent="space-around">
            <BookDemo mr={2}></BookDemo>
            <PrimaryButton variant="outline">Sign up</PrimaryButton>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const sliced_blog_posts = await Client().query(
    Prismic.Predicates.at("document.type", "blog-post")
  );

  const blog_posts = await Client().query(
    Prismic.Predicates.at("document.type", "bl")
  );

  return {
    props: {
      docs: sliced_blog_posts.results,
      blog_posts: blog_posts.results,
    },
  };
}

export default Home;
