import Prismic from "@prismicio/client";
import { Flex, Heading } from "@chakra-ui/layout";
import Client from "../../prismicHelpers";

interface TermsProps {
  docs: any;
}

function Terms({ docs }: TermsProps) {
  let termsPage = docs[0];

  return (
    <Flex w="100%" justifyContent="center">
      <Flex flexFlow="column" mt="100px" w="80%">
        <Heading>{termsPage.data.page_title[0].text}</Heading>
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
