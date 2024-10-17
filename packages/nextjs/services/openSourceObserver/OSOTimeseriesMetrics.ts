import { OSOTimeseriesMetricsResponse } from "~~/app/types/OSO";

export const fetchOSOTimeseriesMetricsByProjectData = async (
  projectId: string,
  metricIds: string[],
  startDate: string,
  endDate: string,
) => {
  const query = `query Oso_timeseriesMetricsByProjectV0($where: Oso_MetricsTimeseriesMetricsByProjectV0BoolExp) {
    oso_timeseriesMetricsByProjectV0(where: $where) {
      amount
      metricId
      projectId
      sampleDate
      unit
    }
  }`;
  const variables = {
    where: {
      projectId: {
        _eq: projectId,
      },
      metricId: {
        _in: metricIds,
      },
      sampleDate: {
        _gt: startDate,
        _lte: endDate,
      },
    },
  };

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
    body: JSON.stringify({ query, variables }),
  });

  const { data }: { data: OSOTimeseriesMetricsResponse } = await response.json();
  return data.oso_timeseriesMetricsByProjectV0;
};
