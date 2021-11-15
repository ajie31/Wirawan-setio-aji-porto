// import { useMediaQuery } from "@mui/material";
import {
  extent,
  scaleLinear,
  scaleTime,
  timeFormat,
  pointer,
  format,
} from "d3";
import { useState, useMemo, useCallback } from "react";
import { Legend } from "./chart/legend";
import { Axis } from "./chart/axis";
import { Chart } from "./chart/chart";
import { Layout } from "./layout";
import { ToolsOverlay } from "./tooltips/toolsOverlay";
// #region Basic Dimension
const margin = { top: 25, right: 40, bottom: 100, left: 100 };
//#endregion Basic Dimension

// #region axis Scale_Value
const xValue = (d) => d.date;
const xAxisTitle = "Tanggal";
const yValue = (d) => d.cases;
const yAxisTitle = "Kasus";
const dateFormat = timeFormat("%Y");
const axisNumFormat = format("~s");
const dataNumFormat = format(",");

const rowByYear = new Map();

//#endregion

// #region Mark / Chart props
const dataColor = { HIV: "#f77c29", AIDS: "#847eba" };

//#endregion

export const App = (props) => {
  const { data, figureProps } = props;
  const [position, setPosition] = useState(-10);
  // const [selectedData, setSelectedData] = useState("Missing Data");

  // TODO Memoize here

  const mergeData = useMemo(() => [...data.HIV, ...data.AIDS]);

  useMemo(() => {
    data.HIV.forEach((d, i) => {
      rowByYear.set(dateFormat(d.date), {
        HIV: d.cases,
        AIDS: data.AIDS[i].cases,
      });
    });
  }, [rowByYear, data]);

  const innerWidth = useMemo(
    () => figureProps.width - margin.left - margin.right
  );
  const innerHeight = useMemo(
    () => figureProps.height - margin.top - margin.bottom
  );

  const xScale = useMemo(
    () => scaleTime().range([0, innerWidth]).domain(extent(mergeData, xValue)),
    [innerWidth, mergeData]
  );

  const yScale = useMemo(
    () =>
      scaleLinear()
        .range([innerHeight, 0])
        .domain(extent(mergeData, yValue))
        .nice(),
    [innerHeight, mergeData]
  );

  const handleCursorPosition = useCallback(
    (e) => {
      setPosition(pointer(e)[0]);
    },
    [setPosition, yScale, xScale, pointer]
  );
  const handleOnMouEnter = useCallback((post) => {
    setPosition(post);
  });

  // TODO Memoize until here

  return (
    <Layout>
      <svg
        viewBox={`0 0 ${figureProps.width} ${figureProps.height}`}
        preserveAspectRatio="xMinYMin"
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          <ToolsOverlay
            innerHeight={innerHeight}
            innerWidth={innerWidth}
            handleCursorPosition={handleCursorPosition}
            position={position}
          />

          <Chart
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            dataFill={dataColor}
          />
          <Axis
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            xScale={xScale}
            yScale={yScale}
            xAxisTitle={xAxisTitle}
            yAxisTitle={yAxisTitle}
            dateFormat={dateFormat}
            rowByYear={rowByYear}
            handleOnMouEnter={handleOnMouEnter}
            dataFill={dataColor}
            position={position}
            axisNumFormat={axisNumFormat}
            dataNumFormat={dataNumFormat}
          />
          <Legend dataColor={dataColor} />
        </g>
      </svg>
    </Layout>
  );
};
