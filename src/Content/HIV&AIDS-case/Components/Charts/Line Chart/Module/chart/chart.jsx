import { area, line } from "d3";
import { useMemo } from "react";
import styles from "../../../../../Style/main.module.css";

export const Chart = (props) => {
  const { data, yScale, xScale, xValue, yValue } = props;

  const MarkLine = useMemo(
    () =>
      line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d))),
    [(yScale, xScale, xValue, yValue)]
  );

  const markArea = useMemo(
    () =>
      area()
        .x((d) => xScale(xValue(d)))
        .y0(yScale(yScale.domain()[0]))
        .y1((d) => yScale(yValue(d))),
    [yScale, xScale, xValue, yValue]
  );
  return (
    <g>
      {useMemo(() => {
        return (
          <>
            <g>
              <path
                className={styles["marks"]}
                pointerEvents="none"
                fill="#f77c29"
                stroke="none"
                opacity="0.5"
                d={markArea(data.HIV)}
              />
              <path
                className={styles["marks"]}
                pointerEvents="none"
                fill="none"
                stroke="#f77c29"
                d={MarkLine(data.HIV)}
              />
            </g>
            <g>
              <path
                className={styles["marks"]}
                pointerEvents="none"
                fill="none"
                stroke="#847eba"
                d={MarkLine(data.AIDS)}
              />
              <path
                className={styles["marks"]}
                pointerEvents="none"
                fill="#847eba"
                opacity="0.5"
                stroke="none"
                d={markArea(data.AIDS)}
              />
            </g>
          </>
        );
      }, [data, styles])}
    </g>
  );
};
