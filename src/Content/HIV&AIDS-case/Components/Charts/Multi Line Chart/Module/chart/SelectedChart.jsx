import { Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { curveCardinal, line } from "d3";
import styles from "../../../../../Style/main.module.css";

const styleTooltips = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: "#8E8883",
    pointerEvents: "none",
  },
}));
export const SelectedChart = (props) => {
  const {
    data,
    yScale,
    xScale,
    opacity,
    dataFill,
    xValue,
    yValue,
    dateFormat,
    dataNumFormat,
  } = props;

  const tooltipClass = styleTooltips();
  const MarkLine = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))
    .curve(curveCardinal.tension(0.2));

  return (
    <>
      <path
        className={styles["marks"]}
        fill="none"
        opacity={opacity}
        stroke={dataFill}
        d={MarkLine(data)}
      />
      {data.map((d) => (
        <g key={d.date}>
          <Tooltip
            classes={tooltipClass}
            title={`${dateFormat(xValue(d))} : ${dataNumFormat(
              yValue(d)
            )} kasus`}
            placement="top"
            arrow
            disableInteractive
            enterTouchDelay="50"
          >
            <circle
              cx={xScale(xValue(d))}
              cy={yScale(yValue(d))}
              r="20"
              fill="transparent"
            />
          </Tooltip>
          <circle
            pointerEvents="none"
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            fill={dataFill}
            stroke="#8E8883"
            strokeWidth="0.1"
            r="6"
          />
        </g>
      ))}
    </>
  );
};
