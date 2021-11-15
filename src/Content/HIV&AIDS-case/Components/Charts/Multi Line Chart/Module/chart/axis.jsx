import { useMemo } from "react";
import styles from "../../../../../Style/main.module.css";
export const Axis = (props) => {
  const { innerWidth, innerHeight, xScale, yScale, dateFormat, axisNumFormat } =
    props;

  return useMemo(() => {
    return (
      <>
        <g id="x-axis-group" transform={`translate(${0},${0})`}>
          {xScale.ticks(5).map((tick) => (
            <g key={tick} transform={`translate(${xScale(tick)},${0})`}>
              <line className={styles["axis-line"]} y2={innerHeight} />
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

        <g id="y-axis-group" transform={`translate(${0},${0})`}>
          {yScale.ticks(3).map((tick, i) => (
            <g key={tick} transform={`translate(${0},${yScale(tick)})`}>
              {/* <line
                className={styles["axis-line"]}
                stroke="black"
                x2={innerWidth}
              /> */}
              <text
                className={styles["chart-text"]}
                dx="-.71em"
                dy=".32em"
                textAnchor="end"
              >
                {i === yScale.ticks(3).length - 1 ? (
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
      </>
    );
  }, [innerWidth, innerHeight, xScale, yScale, dateFormat]);
};
