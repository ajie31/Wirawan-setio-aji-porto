import styles from "../../../../../Style/main.module.css";
export const Legend = ({ dataColor }) => {
  return (
    <g pointerEvents="none">
      <rect width={200} height={90} fill="transparent" />
      <g transform={`translate(${30},${25})`}>
        <g transform={`translate(${0},${0})`}>
          <circle r="10" fill={dataColor.HIV} />
          <text dx="1.3rem" dy=".34em" className={styles["legend-title"]}>
            HIV
          </text>
        </g>
        <g transform={`translate(${0},${35})`}>
          <circle r="10" fill={dataColor.AIDS} />
          <text dx="1.3rem" dy=".34em" className={styles["legend-title"]}>
            AIDS
          </text>
        </g>
      </g>
    </g>
  );
};
