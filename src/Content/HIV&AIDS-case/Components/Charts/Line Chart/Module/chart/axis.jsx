import { ThemeProvider, Typography } from "@mui/material";
import { TextTheme } from "../../../../../Style/theme";
import styles from "../../../../../Style/main.module.css";
import { HtmlTooltip } from "../tooltips/tooltip";
export const Axis = (props) => {
  const {
    innerWidth,
    innerHeight,
    xScale,
    yScale,
    xAxisTitle,
    yAxisTitle,
    dateFormat,
    rowByYear,
    handleOnMouEnter,
    dataFill,
    position,
    axisNumFormat,
    dataNumFormat,
  } = props;

  return (
    <>
      <g transform={`translate(${0},${0})`}>
        {xScale.ticks(5).map((tick, i) => (
          <g key={tick} transform={`translate(${xScale(tick)},${0})`}>
            <line
              className={styles["axis-line"]}
              y1={innerHeight}
              y2={innerHeight + 10}
            />
            <text
              className={styles["chart-text"]}
              y={innerHeight + 15}
              dy=".71em"
              textAnchor="middle"
            >
              {dateFormat(tick)}
            </text>
          </g>
        ))}
      </g>

      <g transform={`translate(${0},${0})`}>
        {yScale.ticks(2).map((tick, i) => (
          <g key={tick} transform={`translate(${0},${yScale(tick)})`}>
            <line
              className={styles["axis-line"]}
              stroke="black"
              x2={innerWidth}
            />
            <text
              className={styles["chart-text"]}
              dx="-.71em"
              dy=".32em"
              textAnchor="end"
              w
            >
              {i === yScale.ticks(2).length - 1 ? (
                <>
                  <tspan x="0" dy="-1em">
                    Kasus
                  </tspan>
                  <tspan x="-16" dy="1.2em">
                    {axisNumFormat(tick)}
                  </tspan>
                </>
              ) : (
                `${axisNumFormat(tick)}`
              )}
            </text>
          </g>
        ))}
      </g>
      <line
        pointerEvents="none"
        stroke="white"
        opacity=".6"
        strokeWidth="3"
        y2={innerHeight}
        x1={position}
        x2={position}
      />
      {xScale.ticks().map((tick) => (
        <HtmlTooltip
          key={tick}
          placement="right"
          arrow
          disableInteractive
          followCursor
          enterTouchDelay="50"
          title={
            <ThemeProvider theme={TextTheme}>
              <Typography
                style={{
                  borderBottom: "1px solid #C0C0BB",
                }}
                variant="body2"
              >
                {dateFormat(tick)}
              </Typography>

              <Typography variant="subtitle2">
                kasus HIV : {dataNumFormat(rowByYear.get(dateFormat(tick)).HIV)}
              </Typography>

              <Typography variant="subtitle2">
                Kasus AIDS :{" "}
                {dataNumFormat(rowByYear.get(dateFormat(tick)).AIDS)}
              </Typography>
            </ThemeProvider>
          }
        >
          <g>
            <rect
              key={tick}
              x={xScale(tick) - 10}
              y={0}
              opacity="0"
              width="20"
              height={innerHeight}
              onMouseEnter={() => handleOnMouEnter(xScale(tick))}
            />

            <circle
              pointerEvents="none"
              cx={xScale(tick)}
              cy={yScale(rowByYear.get(dateFormat(tick)).HIV)}
              r="5"
              fill={dataFill.HIV}
            />
            <circle
              pointerEvents="none"
              cx={xScale(tick)}
              cy={yScale(rowByYear.get(dateFormat(tick)).AIDS)}
              r="5"
              fill={dataFill.AIDS}
            />
          </g>
        </HtmlTooltip>
      ))}
    </>
  );
};
