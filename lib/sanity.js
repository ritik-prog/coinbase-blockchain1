import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "ook4dqxh",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skXfrp0DhjCSeuHA5cCgbg2wmqnCY8xAsbuQaFte9ZkGdKy8luKaFoxPR80VzWRoG0Qat7cIELscWaYEnedmlsIkprHZd2yCgpIfiOQSoF7BfevJcUpHKgGIrPCTL2KHcPKsEiFoaWLhIGFbxtyVOA8UuIMzpM8JUpJ7BG0TefnfJn4l90lm",
  useCdn: false,
});
