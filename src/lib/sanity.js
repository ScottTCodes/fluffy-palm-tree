import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_SANITY_STUDIO_API_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
});
