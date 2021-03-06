import { useRouter } from "next/router";
import Prismic from "@prismicio/client";
import { useTheme } from "@chakra-ui/system";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { RichText, Link } from "prismic-reactjs";
import PreviewLoader from "../../src/flat/PreviewLoader";
import Custom404 from "../404";
import useUpdatePreviewRef from "../../src/utils/useUpdatePreviewRef";
import SideBar from "../../src/flat/SideBar";
import Footer from "../../src/flat/Footer";
import Client from "../../prismicHelpers";
import styles from "./Terms.module.css";

interface TermsProps {
  docs: any;
  previewRef: any;
}

function Terms({ docs, previewRef }: TermsProps) {
  let termsPage = docs;

  const { breakpoints } = useTheme();
  const router = useRouter();
  const isSmallerThan768 = useMediaQuery(`(max-width: ${breakpoints.md})`);

  useUpdatePreviewRef(previewRef, termsPage?.id);

  if (router.isFallback) {
    return <PreviewLoader />;
  }

  if (!termsPage?.id) {
    return <Custom404 />;
  }

  return (
    <Flex>
      {!isSmallerThan768 && <SideBar />}
      <Flex flexFlow="column">
        <Flex
          width={{ base: "100vw", md: "100%" }}
          justifyContent="center"
          borderLeft="1px solid"
          borderColor="border.100"
          pb="spacer-04"
          className={styles.termsPageWrapper}
        >
          <Flex flexFlow="column" mt="100px" w="80%">
            <Heading>{termsPage.data.page_title[0].text}</Heading>
            <Text pb={10} color="gray">
              Effective Date: {termsPage.data.effective_date}
            </Text>
            {termsPage.data.body.map((section: any, i: number) => {
              if (section.slice_type == "page_section") {
                return (
                  <Flex flexFlow="column" key={i}>
                    {section.primary.section_name && (
                      <Heading as="h3" fontSize="3xl" my="10px" mt={10}>
                        {section.primary.section_name}
                      </Heading>
                    )}
                    {section.items.map((item: any, sectionIndex: number) => {
                      return (
                        <RichText
                          render={item.section_body}
                          key={sectionIndex}
                        />
                      );
                    })}
                  </Flex>
                );
              }
              return null;
            })}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}

export async function getStaticProps({ params, previewData }: any) {
  const previewRef = previewData && previewData.ref ? previewData.ref : null;
  const ref = previewData ? previewData.ref : null;

  // const terms = await Client().query(
  //   Prismic.Predicates.at("document.type", "terms_page")
  // );
  const terms = await Client().getSingle("terms_page", ref ? { ref } : {});

  return {
    props: {
      docs: terms,
      previewRef,
    },
  };
}

export default Terms;
