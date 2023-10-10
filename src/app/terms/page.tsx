import { useRouter } from "next/navigation";
import Prismic from "@prismicio/client";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { RichText, Link } from "prismic-reactjs";
import Client from "../../../prismicHelpers"


async function Terms() {
  const terms = await Client().getSingle("terms_page");

  let termsPage = terms;


  return (
    <Flex>
      {/* {!isSmallerThan768 && <SideBar />} */}
      <Flex flexFlow="column">
        <Flex
          width={{ base: "100vw", md: "100%" }}
          justifyContent="center"
          pb="spacer-04"
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
        {/* <Footer /> */}
      </Flex>
    </Flex>
  );
}

export default Terms;