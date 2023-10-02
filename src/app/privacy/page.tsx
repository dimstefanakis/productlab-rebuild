import Prismic from "@prismicio/client";
import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/layout";
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
// import Footer from "../../src/flat/Footer";
import Client from "../../../prismicHelpers"
// import styles from "./Privacy.module.css";

interface PrivacyProps {
  docs: any;
}

async function Privacy() {
  const privacy = await Client().getSingle(
    "privacy_policy_page"
  );

  const privacyPage = privacy;

  return (
    <Flex>
      <Flex flexFlow="column">
        <Flex
          width={{ base: "100vw", md: "100%" }}
          justifyContent="center"
          // borderLeft="1px solid"
          // borderColor="border.100"
          pb="spacer-04"
          // className={styles.privacyPageWrapper}
        >
          <Flex flexFlow="column" mt="100px" w="80%">
            <Heading>{privacyPage.data.page_title[0].text}</Heading>
            <Text pb={10} color="gray">
              Effective Date: {privacyPage.data.effective_date}
            </Text>
            {privacyPage.data.body.map((section: any, i: number) => {
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
              } else if (section.slice_type == "table") {
                return (
                  <Flex key={i} width="100%" overflow="auto">
                    <PrivacyTable key="table" />
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

function PrivacyTable() {
  return (
    <Table variant="striped" my={5}>
      <Thead>
        <Tr>
          <Th w="40%">Statutory category of personal information</Th>
          <Th>Personal information we collect in this category</Th>
          <Th>Source of personal information</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Identifiers (such as contact information, cookies, etc.)</Td>
          <Td>
            <UnorderedList>
              <ListItem>Registration Details</ListItem>
              <ListItem>Technical Information and Device Data</ListItem>
              <ListItem>Third Party Account Data</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Directly from you</ListItem>
              <ListItem>Automatic collection from you</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>
            Personal information under California Civil Code section 1798.80
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Technical Information and Device Data</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Directly from you</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>
            Commercial Information (such as records of products or services
            purchased, obtained, or considered)
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Earnings and Activity Data</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Directly from you</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>Internet or Network Information</Td>
          <Td>
            <UnorderedList>
              <ListItem>Technical Information and Device Data</ListItem>
              <ListItem>Site Usage Information and Preferences</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Automatic collection from you</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>Geolocation Data</Td>
          <Td>
            <UnorderedList>
              <ListItem>Technical Information and Device Data</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Automatic collection from you</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>Professional or Employment Information</Td>
          <Td>
            <UnorderedList>
              <ListItem>Employment Details</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Directly from you</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>
            Inferences (drawn from any of the information identified to create a
            profile about a consumer reflecting the consumer’s preferences,
            characteristics, psychological trends, predispositions, behavior,
            attitudes, intelligence, abilities, and aptitudes)
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Registration Details</ListItem>
              <ListItem>Earnings and Activity Data</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>Directly from you</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>
            Protected Classification Information (such as race, gender,
            ethnicity)
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>None</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>N/A</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>
            Education Information (defined as information that is not publicly
            available personally identifiable information as defined in the
            Family Educational Rights and Privacy Act (20 U.S.C. section Sec.
            1232g, ; 34 C.F.R. Part 99)
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>None</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>N/A</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
        <Tr>
          <Td>
            Sensory Information (such as audio, electronic, visual, or other
            similar information)
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>None</ListItem>
            </UnorderedList>
          </Td>
          <Td>
            <UnorderedList>
              <ListItem>N/A</ListItem>
            </UnorderedList>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
// export async function getStaticProps({ previewData }: any) {
//   const previewRef = previewData && previewData.ref ? previewData.ref : null;
//   const ref = previewData ? previewData.ref : null;

//   // const privacy = await Client().query(
//   //   Prismic.Predicates.at("document.type", "privacy_policy_page")
//   // );
//   const privacy = await Client().getSingle(
//     "privacy_policy_page",
//     ref ? { ref } : {}
//   );

//   return {
//     props: {
//       docs: privacy,
//     },
//   };
// }

export default Privacy;