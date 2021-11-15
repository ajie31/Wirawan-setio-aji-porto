import styles from "../Styles/IndonesianMap.module.css";
export const Decoration = ({ pathGenerator, graticule }) => {
  return (
    <g>
      <path className={styles.sea} d={pathGenerator({ type: "Sphere" })} />
      <path className={styles.graticule} d={pathGenerator(graticule())} />
    </g>
  );
};
