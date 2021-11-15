import styles from "../Styles/IndonesianMap.module.css";
export const Decoration = ({ pathGenerator }) => {
  return (
    <g>
      <path className={styles.sea} d={pathGenerator({ type: "Sphere" })} />
      {/* <path className={styles.graticule} d={pathGenerator(graticule())} /> */}
    </g>
  );
};
