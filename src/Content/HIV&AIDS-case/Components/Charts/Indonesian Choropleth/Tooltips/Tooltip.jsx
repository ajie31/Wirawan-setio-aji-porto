import {
  Typography,
  ThemeProvider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TextTheme } from "../../../../Style/theme";
import styles from "../Styles/IndonesianMap.module.css";
import { TooltipTable } from "./tooltipTable";
const stylePaper = (isEnter, position, breakingPoint) => {
  return {
    display: isEnter ? "block" : "none",
    pointerEvents: "none",
    width: breakingPoint ? "100%" : 256,
    position: breakingPoint ? "static" : "absolute",
    transform: breakingPoint ? "translate(0,0)" : "translate(-50%,5%)",
    left: position.x,
    top: position.y,
    marginBottom: 16,
    zIndex: 20,
    opacity: 0.7,
  };
};

export const Tooltip = ({ provinceData, position, isEnter, breakingPoint }) => {
  return (
    <Paper
      style={stylePaper(isEnter, position, breakingPoint)}
      elevation={breakingPoint ? 0 : 5}
    >
      <TooltipTable
        row={provinceData}
        TableContainer={TableContainer}
        Table={Table}
        TableHead={TableHead}
        TableBody={TableBody}
        TableCell={TableCell}
        TableRow={TableRow}
        Paper={Paper}
        ThemeProvider={ThemeProvider}
        Typography={Typography}
        styles={styles}
        TextTheme={TextTheme}
      />
    </Paper>
  );
};
