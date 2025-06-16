// ~/utils/prismicHelpers.js
import { createClient } from "@prismicio/client";
import Link from "next/link";
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  routeResolver,
} from "./prismicConfiguration";

// Helper function to convert Prismic Rich Text links to Next/Link components
// @ts-ignore
export const customLink = (type, element, content, children, index) => (
  <Link key={index} href={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
);

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const Client = (req = null) =>
  createClient(
    apiEndpoint,
    // @ts-ignore
    createClientOptions(req, accessToken, routeResolver),
  );

// Options to be passed to the Client
const createClientOptions = (
  req = null,
  prismicAccessToken = null,
  routes = null,
) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  const routesOption = routes ? { routes: routeResolver.routes } : {};
  return {
    ...reqOption,
    ...accessTokenOption,
    ...routesOption,
  };
};

export function extractBlogDataFromPrisma(data: any) {
  let blogData = data;
  blogData = blogData.results.map((_blog: any) => {
    let blog = _blog.data;
    return {
      slices: blog.body,
    };
  });
  return blogData[0].slices;
}

export default Client;
