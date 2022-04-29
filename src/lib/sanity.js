import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "rdq98x0p",
  dataset: "production",
  useCdn: true
});
