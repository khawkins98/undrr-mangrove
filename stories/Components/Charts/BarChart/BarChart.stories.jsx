import BarChart from "./BarChart";
import Fetcher from "../../Fetcher/Fetcher";
import { Loader } from "../../../Utilities/Loader/Loader";

export default {
  title: "Components/Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  argTypes: {
    xAxisLabel: {
      control: "text",
      description: "Label for the x-axis",
      defaultValue: "Year",
    },
    yAxisLabel: {
      control: "text",
      description: "Label for the y-axis",
      defaultValue: "Number of Commitments",
    },
    labelColor: {
      control: "color",
      description: "Color of the axis and label texts",
      defaultValue: "#9CA3AF",
    },
    axisColor: {
      control: "color",
      description: "Color of the axis lines",
      defaultValue: "#9CA3AF",
    },
    tickColor: {
      control: "color",
      description: "Color of the tick marks on the axis",
      defaultValue: "#9FAAAE",
    },
    title: {
      control: "text",
      description: "Title of the chart",
      defaultValue: "Commitments by Year",
    },
    dataSource: {
      control: "text",
      description: "Data source label",
      defaultValue: "Data from fetched API",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for accessibility",
      defaultValue: "Bar chart showing the number of commitments by year",
    },
    ariaDescription: {
      control: "text",
      description: "ARIA description for accessibility",
      defaultValue:
        "This chart displays the number of commitments made each year based on fetched API data.",
    },
    width: {
      control: "number",
      description: "Width of the chart",
      defaultValue: 1000,
    },
    height: {
      control: "number",
      description: "Height of the chart",
      defaultValue: 400,
    },
  },
};

const Template = (args) => (
  <Fetcher
    api="https://sfvc-migration.undrr.org/api/v2/content/commitments-metrics"
    queryParams={{
      items_per_page: 1000,
    }}
    render={({ isLoading, data }) => (
      <>{isLoading ? <Loader /> : <BarChart data={data} {...args} />}</>
    )}
  />
);

export const BarChartWithFetcher = Template.bind({});
BarChartWithFetcher.args = {
  xAxisLabel: "Year",
  yAxisLabel: "Number of Commitments",
  labelColor: "#9CA3AF",
  axisColor: "#9CA3AF",
  tickColor: "#9FAAAE",
  title: "Commitments by Year",
  dataSource: "Data from fetched API",
  ariaLabel: "Bar chart showing the number of commitments by year",
  ariaDescription:
    "This chart displays the number of commitments made each year based on fetched API data.",
  width: 1000,
  height: 400,
};

export const BarChartForOrganisations = Template.bind({});
BarChartForOrganisations.args = {
  xAxisLabel: "Years",
  yAxisLabel: "Number of Organisations",
  labelColor: "#9CA3AF",
  axisColor: "#9CA3AF",
  tickColor: "#9FAAAE",
  title: "Commitments by Organisations",
  dataSource: "Data from fetched API",
  ariaLabel: "Bar chart showing the number of organisations by year",
  ariaDescription:
    "This chart displays the number of organisations committing each year based on fetched API data.",
  width: 1000,
  height: 400,
  type: "ORGANISATIONS", // This is passed to handle different data transformation
};
