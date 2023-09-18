import Head from "next/head";
import { useEffect, useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/layout";
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
import useMediaQuery from "../src/hooks/useMediaQuery";
import { Client } from "../prismicHelpers";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

interface HomeProps {
  docs: any;
  blog_posts: any;
  homepage: any;
}

const Home = ({ docs, blog_posts, homepage }: HomeProps) => {
  const [mounted, setMounted] = useState(false);
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);
  let heroText = homepage[0].data.hero_text[0].text;

  return (
    <>
      <Head>
        <title>Productlab - {heroText}</title>
        <meta
          name="description"
          content="Source scalable and consistent real-time data directly from receipts, digital accounts, paychecks, emails, and more — all fully permissioned and compiled directly from end consumers."
        />
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
  const router = useRouter();
  const { breakpoints } = useTheme();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  function onSignupClick() {
    router.push("https://prodlab.app.link/app");
  }

  let text = `Source scalable and consistent real-time data directly from receipts, digital accounts, paychecks, emails, and more — all fully permissioned and compiled directly from end consumers.`;
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
            <PrimaryButton variant="outline" onClick={onSignupClick}>
              Take Surveys
            </PrimaryButton>
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

  const homepage = await Client().query(
    Prismic.Predicates.at("document.type", "homepage")
  );

  return {
    props: {
      docs: sliced_blog_posts.results,
      blog_posts: blog_posts.results,
      homepage: homepage.results,
    },
  };
}

export default Home;
