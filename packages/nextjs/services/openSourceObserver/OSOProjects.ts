import { OSOProjectResponse } from "~~/app/types/OSO";

export const fetchOSOProjects = async () => {
  const query = `{
    oso_projectsV1 {
      description
      displayName
      projectId
      projectName
      projectNamespace
      projectSource
    }
  }`;

  const OSOGraphQLEndpoint = process.env.OSO_GRAPHQL_ENDPOINT as string;
  const OSOApiKey = process.env.OSO_API_KEY as string;

  if (!OSOGraphQLEndpoint) {
    throw new Error("OSO_GRAPHQL_ENDPOINT env var is not defined");
  }

  if (!OSOApiKey) {
    throw new Error("OSO_API_KEY env var is not defined");
  }

  const response = await fetch(OSOGraphQLEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OSOApiKey}`,
    },
    body: JSON.stringify({ query }),
  });

  const { data }: { data: OSOProjectResponse } = await response.json();
  return data.oso_projectsV1;
};
