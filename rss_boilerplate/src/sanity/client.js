import sanityClient from "@sanity/client";

const options = {
  projectId: "xm8mcq29",
  dataset: "production",
};

const client = sanityClient({
  ...options,
  apiVersion: "2021-08-31",
  useCdn: true,
});

export default client;
