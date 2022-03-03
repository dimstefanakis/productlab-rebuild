import Prismic from "@prismicio/client";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { RichText, Link } from "prismic-reactjs";
import Client from "../../prismicHelpers";
import styles from "./Terms.module.css";

interface TermsProps {
  docs: any;
}

function Terms({ docs }: TermsProps) {
  let termsPage = docs[0];

  return (
    <Flex w="100%" justifyContent="center" className={styles.termsPageWrapper}>
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
                    <RichText render={item.section_body} key={sectionIndex} />
                  );
                })}
              </Flex>
            );
          }
          return null;
        })}
      </Flex>
    </Flex>
  );
}

export async function getStaticProps() {
  const terms = await Client().query(
    Prismic.Predicates.at("document.type", "terms_page")
  );

  return {
    props: {
      docs: terms.results,
    },
  };
}

export default Terms;
