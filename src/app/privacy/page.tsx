import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RichText, Link } from "prismic-reactjs";
// import Footer from "../../src/flat/Footer";
import Client from "../../../prismicHelpers";
// import styles from "./Privacy.module.css";

interface PrivacyProps {
  docs: any;
}

async function Privacy() {
  const privacy = await Client().getSingle("privacy_policy_page");

  const privacyPage = privacy;

  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <div className="w-screen md:w-full flex justify-center pb-8">
          <div className="flex flex-col mt-24 w-4/5">
            <h1 className="text-2xl font-bold">
              {privacyPage.data.page_title[0].text}
            </h1>
            <p className="pb-10 text-gray-600">
              Effective Date: {privacyPage.data.effective_date}
            </p>
            {privacyPage.data.body.map((section: any, i: number) => {
              if (section.slice_type == "page_section") {
                return (
                  <div className="flex flex-col" key={i}>
                    {section.primary.section_name && (
                      <h3 className="text-3xl my-2 mt-10">
                        {section.primary.section_name}
                      </h3>
                    )}
                    {section.items.map((item: any, sectionIndex: number) => {
                      return (
                        <RichText
                          render={item.section_body}
                          key={sectionIndex}
                        />
                      );
                    })}
                  </div>
                );
              } else if (section.slice_type == "table") {
                return (
                  <div key={i} className="w-full overflow-auto">
                    <PrivacyTable key="table" />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

function PrivacyTable() {
  return (
    <Table className="my-5">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">
            Statutory category of personal information
          </TableHead>
          <TableHead>
            Personal information we collect in this category
          </TableHead>
          <TableHead>Source of personal information</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            Identifiers (such as contact information, cookies, etc.)
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Registration Details</li>
              <li>Technical Information and Device Data</li>
              <li>Third Party Account Data</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Directly from you</li>
              <li>Automatic collection from you</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Personal information under California Civil Code section 1798.80
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Technical Information and Device Data</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Directly from you</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Commercial Information (such as records of products or services
            purchased, obtained, or considered)
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Earnings and Activity Data</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Directly from you</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Internet or Network Information</TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Technical Information and Device Data</li>
              <li>Site Usage Information and Preferences</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Automatic collection from you</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Geolocation Data</TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Technical Information and Device Data</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Automatic collection from you</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Professional or Employment Information</TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Employment Details</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Directly from you</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Inferences (drawn from any of the information identified to create a
            profile about a consumer reflecting the consumer's preferences,
            characteristics, psychological trends, predispositions, behavior,
            attitudes, intelligence, abilities, and aptitudes)
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Registration Details</li>
              <li>Earnings and Activity Data</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>Directly from you</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Protected Classification Information (such as race, gender,
            ethnicity)
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>None</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>N/A</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Education Information (defined as information that is not publicly
            available personally identifiable information as defined in the
            Family Educational Rights and Privacy Act (20 U.S.C. section Sec.
            1232g, ; 34 C.F.R. Part 99)
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>None</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>N/A</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Sensory Information (such as audio, electronic, visual, or other
            similar information)
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>None</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul className="list-disc pl-5">
              <li>N/A</li>
            </ul>
          </TableCell>
        </TableRow>
      </TableBody>
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
