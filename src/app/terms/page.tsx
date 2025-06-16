import { RichText, Link } from "prismic-reactjs";
import Client from "../../../prismicHelpers";

async function Terms() {
  const terms = await Client().getSingle("terms_page");

  const termsPage = terms;

  return (
    <div className="flex">
      {/* {!isSmallerThan768 && <SideBar />} */}
      <div className="flex flex-col">
        <div className="w-screen md:w-full flex justify-center pb-8">
          <div className="flex flex-col mt-24 w-4/5">
            <h1 className="text-2xl font-bold">
              {termsPage.data.page_title[0].text}
            </h1>
            <p className="pb-10 text-gray-600">
              Effective Date: {termsPage.data.effective_date}
            </p>
            {termsPage.data.body.map((section: any, i: number) => {
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

export default Terms;
