import { extent, max, scaleLog, scaleTime, timeFormat, format } from "d3";
import { useMemo, useState } from "react";

import { Layout } from "./Layout/Layout";
import { Chart } from "./Chart/chart";
import { SelectedChart } from "./Chart/SelectedChart";
import { Axis } from "./Chart/axis";

import { mergePerProvince, getSortedProvince } from "../../../Data/dataProcess";

// #region Basic Dimension
const margin = { top: 55, right: 40, bottom: 36, left: 100 };
//#endregion Basic Dimension

// #region axis Scale_Value
const xValue = (d) => d.date;
const xAxisTitle = "Tanggal";
const yValue = (d) => d.cases;
const yAxisTitle = "Kasus";
const dateFormat = timeFormat("%Y");
const axisNumFormat = format("~s");
const dataNumFormat = format(",");
//#endregion

const dataColor = { HIV: "#b63c02", AIDS: "#847eba" };

const rowByProvince = new Map();

export const App = (props) => {
  const { data, figureProps } = props;
  const [topic, setTopic] = useState("HIV");
  const [province, setProvince] = useState(null);

  data.HIV.map((d, i) =>
    rowByProvince.set(d.province, {
      HIV: d.properties,
      AIDS: data.AIDS[i].properties,
    })
  );

  const mergeDataHIV = useMemo(
    () => mergePerProvince(data.HIV),
    [mergePerProvince, data]
  );

  const mergeDataAIDS = useMemo(
    () => mergePerProvince(data.AIDS),
    [mergePerProvince, data]
  );
  const innerWidth = useMemo(
    () => figureProps.width - margin.left - margin.right,
    [figureProps, margin]
  );
  const innerHeight = useMemo(
    () => figureProps.height - margin.top - margin.bottom,
    [figureProps, margin]
  );

  const xScaleHIV = useMemo(
    () =>
      scaleTime().range([0, innerWidth]).domain(extent(mergeDataHIV, xValue)),
    [scaleTime, innerWidth, extent, mergeDataHIV, xValue]
  );

  const yScaleHIV = useMemo(
    () =>
      scaleLog()
        .range([innerHeight, 0])
        .domain([10, max(mergeDataHIV, yValue)])
        .nice(),
    [scaleLog, extent, yValue, mergeDataHIV, innerHeight]
  );

  const xScaleAIDS = useMemo(
    () =>
      scaleTime().range([0, innerWidth]).domain(extent(mergeDataAIDS, xValue)),
    [scaleTime, innerWidth, extent, mergeDataAIDS, xValue]
  );

  const yScaleAIDS = useMemo(
    () =>
      scaleLog()
        .range([innerHeight, 0])
        .domain([10, max(mergeDataAIDS, yValue)])
        .nice(),
    [scaleLog, extent, yValue, mergeDataAIDS, innerHeight]
  );
  const onTopicChange = (event, newTopic) => {
    setTopic(newTopic);
  };

  return (
    <Layout
      data={rowByProvince}
      topic={topic}
      onTopicChange={onTopicChange}
      province={province}
      setProvince={setProvince}
      provinceList={getSortedProvince(data[topic])}
      dataNumFormat={dataNumFormat}
    >
      <svg
        viewBox={`0 0 ${figureProps.width} ${figureProps.height}`}
        preserveAspectRatio="xMinYMin"
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          <g className="axis-group">
            <g opacity={topic === "HIV" ? 1 : 0} className="axis-HIV">
              <Axis
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                xScale={xScaleHIV}
                yScale={yScaleHIV}
                xAxisTitle={xAxisTitle}
                yAxisTitle={yAxisTitle}
                dateFormat={dateFormat}
                axisNumFormat={axisNumFormat}
                dataNumFormat={dataNumFormat}
              />
            </g>
            <g opacity={topic === "AIDS" ? 1 : 0} className="axis-AIDS">
              <Axis
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                xScale={xScaleAIDS}
                yScale={yScaleAIDS}
                xAxisTitle={xAxisTitle}
                yAxisTitle={yAxisTitle}
                dateFormat={dateFormat}
                axisNumFormat={axisNumFormat}
              />
            </g>
          </g>
          <g className="chart-group">
            <g opacity={topic === "HIV" ? 1 : 0}>
              <Chart
                data={data.HIV}
                xScale={xScaleHIV}
                yScale={yScaleHIV}
                opacity="0.08"
                dataFill={dataColor.HIV}
                xValue={xValue}
                yValue={yValue}
              />
            </g>
            <g opacity={topic === "AIDS" ? 1 : 0}>
              <Chart
                data={data.AIDS}
                xScale={xScaleAIDS}
                yScale={yScaleAIDS}
                opacity="0.15"
                dataFill={dataColor.AIDS}
                xValue={xValue}
                yValue={yValue}
              />
            </g>
            {province ? (
              <g className="selected">
                <SelectedChart
                  data={rowByProvince.get(province)[topic]}
                  xScale={topic === "HIV" ? xScaleHIV : xScaleAIDS}
                  yScale={topic === "HIV" ? yScaleHIV : yScaleAIDS}
                  opacity="1"
                  dataFill={dataColor[topic]}
                  xValue={xValue}
                  yValue={yValue}
                  dateFormat={dateFormat}
                  dataNumFormat={dataNumFormat}
                />
              </g>
            ) : null}
          </g>
        </g>
      </svg>
    </Layout>
  );
};
