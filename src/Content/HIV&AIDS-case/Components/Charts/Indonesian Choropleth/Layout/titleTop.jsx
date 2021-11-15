import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import styles from "../Styles/IndonesianMap.module.css";

const toggleStyle = {
  padding: "6px 12px",
  fontFamily: "Domine",
  fontSize: "0.72em",
  color: "8e8883",
  fontWeight: 600,
};
const layoutStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
};
export const TitleTop = ({ topic, onTopicChange }) => {
  return (
    <Box sx={layoutStyle}>
      <h2
        className={styles["medium-title"]}
      >{`Kasus Baru ${topic} Pada Tahun 2020`}</h2>

      <ToggleButtonGroup value={topic} exclusive onChange={onTopicChange}>
        <ToggleButton disabled={topic === "HIV"} sx={toggleStyle} value="HIV">
          Kasus HIV
        </ToggleButton>
        <ToggleButton disabled={topic === "AIDS"} sx={toggleStyle} value="AIDS">
          Kasus AIDS
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
