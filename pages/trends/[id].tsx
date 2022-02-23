import { useRouter } from "next/router";
import Client from "../../prismicHelpers";
import Prismic from "@prismicio/client";

function BlogPostPage(){

}

export async function getStaticProps({params}: any) {
  const post = await Client().getByUID('bl', params.uid, {});

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const docs = await Client().query(
    Prismic.Predicates.at("document.type", "blog")
  );

  return {
    paths: docs.results.map((doc) => {
      return { params: { uid: doc.uid } };
    }),
    fallback: false,
  };
}
export default BlogPostPage;
