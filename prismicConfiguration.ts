// -- Prismic Repo Name
export const repoName = "productlab";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.ACCESS_TOKEN;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: any) => {
  if (doc.type === "blog-post") {
    return `/trends/${doc.uid}`;
  }
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  if (doc.type === "privacy_policy_page") {
    return "/privacy";
  }
  if (doc.type === "terms_page") {
    return "/terms";
  }
  return "/";
};

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    // {
    //   type: "page",
    //   path: "/:uid",
    // },
  ],
};