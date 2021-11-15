import { curveCardinal, line } from "d3";
import { useMemo } from "react";
import styles from "../../../../../Style/main.module.css";

export const Chart = (props) => {
  const { data, yScale, xScale, opacity, xValue, yValue, dataFill } = props;

  const MarkLine = useMemo(
    () =>
      line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(curveCardinal),
    [curveCardinal, line, xScale, xValue, yValue, yScale]
  );

  return useMemo(() => {
    return (
      <>
        {data.map((d, i) => (
          <path
            key={i}
            className={styles["marks"]}
            fill="none"
            opacity={opacity}
            stroke={dataFill}
            d={MarkLine(d.properties ? d.properties : d)}
          />
        ))}
      </>
    );
  }, [MarkLine, styles, data]);
};
