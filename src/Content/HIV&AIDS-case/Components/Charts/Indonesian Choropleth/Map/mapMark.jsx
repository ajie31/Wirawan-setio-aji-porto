import styles from "../Styles/IndonesianMap.module.css";
const missingDataColor = "#E5E2E0";
import { useMemo } from "react";

export const MapMark = ({
  data,
  interiors,
  pathGenerator,
  colorScale,
  colorValue,
  rowByProvince,
  margin,
  onMouseOverHandler,
  onMouseMoveHandler,
  onMouseLeaveHandler,
}) => {
  return (
    <g
      transform={`translate(${margin.left},${margin.top})`}
      className="provinces"
    >
      {data.features.map((d, i) => {
        const provinceColor = rowByProvince.get(d.properties["NAME_1"]);

        return (
          <path
            key={i}
            className={styles.province}
            d={pathGenerator(d)}
            stroke="none"
            data-provinsi={d.properties["NAME_1"]}
            onMouseOver={(e) => onMouseOverHandler(e.target)}
            onMouseMove={(e) => onMouseMoveHandler({ x: e.pageX, y: e.pageY })}
            onMouseLeave={() => onMouseLeaveHandler()}
            fill={
              !provinceColor
                ? missingDataColor
                : colorScale(colorValue(provinceColor))
            }
          />
        );
      })}
      {useMemo(
        () => (
          <path
            className={styles.interiors}
            d={pathGenerator(interiors)}
            fill={"none"}
          />
        ),
        [styles, pathGenerator, interiors]
      )}
    </g>
  );
};
