import Prismic from "@prismicio/client";
import { Flex, Heading } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { RichText, Link } from "prismic-reactjs";
import Client from "../../prismicHelpers";
import styles from "./Privacy.module.css";

interface PrivacyProps {
  docs: any;
}

function Privacy({ docs }: PrivacyProps) {
  console.log("docs", docs);
  let privacyPage = docs[0];
  return (
    <Flex
      w="100%"
      justifyContent="center"
      className={styles.privacyPageWrapper}
    >
      <Flex flexFlow="column" mt="100px" w="80%">
        <Heading>{privacyPage.data.page_title[0].text}</Heading>
        {privacyPage.data.body.map((section: any, i: number) => {
          if (section.slice_type == "page_section") {
            return (
              <Flex flexFlow="column">
                <Heading as="h3" fontSize="3xl" margin="10px 0">
                  {section.primary.section_name}
                </Heading>
                {section.items.map((item: any, sectionIndex: number) => {
                  return <RichText render={item.section_body} />;
                })}
              </Flex>
            );
          }
          return <Flex key={i}></Flex>;
        })}
      </Flex>
    </Flex>
  );
}

export async function getStaticProps() {
  const privacy = await Client().query(
    Prismic.Predicates.at("document.type", "privacy_policy_page")
  );

  return {
    props: {
      docs: privacy.results,
    },
  };
}

export default Privacy;
