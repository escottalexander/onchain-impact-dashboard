import { OSOMetricsResponse } from "~~/app/types/OSO";

export const fetchOSOMetricData = async () => {
  const query = `{
      oso_metricsV0 {
        aggregationFunction
        definitionRef
        description
        displayName
        metricId
        metricName
        metricNamespace
        metricSource
        rawDefinition
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

  const { data: metrics }: { data: OSOMetricsResponse } = await response.json();
  return metrics;
};
