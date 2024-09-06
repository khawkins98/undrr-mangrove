import BarChart from "./BarChart";
import Fetcher from "../../Fetcher/Fetcher";

export default {
  title: "Components/Charts/BarChart",
  component: BarChart,
};

export const BarChartWithFetcher = {
  render: () => (
    <Fetcher
      api="https://sfvc-migration.undrr.org/api/v2/content/commitments-metrics"
      queryParams={{
        items_per_page: 1000,
      }}
      render={({ isLoading, data }) => (
        <>
          {isLoading ? (
            <span>Loading data...</span>
          ) : (
            <BarChart
              data={data}
              width={1000}
              height={400}
              labelColor="#9CA3AF"
              axisColor="#9CA3AF"
              tickColor="#9FAAAE"
              title="Commitments by Year"
              xAxisLabel="Year"
              yAxisLabel="Number of Commitments"
              dataSource="Data from fetched API"
              ariaLabel="Bar chart showing the number of commitments by year"
              ariaDescription="This chart displays the number of commitments made each year based on fetched API data."
            />
          )}
        </>
      )}
    />
  ),

  name: "BarChart with Fetcher",
};

export const BarChartForOrganisations = {
  render: () => (
    <Fetcher
      api="https://sfvc-migration.undrr.org/api/v2/content/commitments-metrics"
      queryParams={{
        items_per_page: 1000,
      }}
      render={({ isLoading, data }) => (
        <>
          {isLoading ? (
            <span>Loading data...</span>
          ) : (
            <BarChart
              data={data}
              width={1000}
              height={400}
              labelColor="#9CA3AF"
              axisColor="#9CA3AF"
              tickColor="#9FAAAE"
              title="Commitments by Organisations"
              type="ORGANISATIONS"
              xAxisLabel="Years"
              yAxisLabel="Number of Organisations"
              dataSource="Data from fetched API"
              ariaLabel="Bar chart showing the number of commitments by year"
              ariaDescription="This chart displays the number of commitments made each year based on fetched API data."
            />
          )}
        </>
      )}
    />
  ),

  name: "BarChart for Organisations",
};
