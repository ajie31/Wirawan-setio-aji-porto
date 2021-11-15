import styles from "../Styles/IndonesianMap.module.css";
export const Map = ({ data, interiors, pathGenerator }) => {
  return (
    <g>
      {data.features.map((d, i) => (
        <path
          key={i}
          stroke="none"
          className={styles["cities-regencies"]}
          d={pathGenerator(d)}
        />
      ))}
      <path
        className={styles.interiors}
        d={pathGenerator(interiors)}
        fill={"none"}
      />
    </g>
  );
};
