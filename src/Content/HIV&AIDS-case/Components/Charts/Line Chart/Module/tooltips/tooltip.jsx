import {
  Typography,
  ThemeProvider,
  tooltipClasses,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextTheme } from "../../../../../Style/theme";

export const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export const ToolTipContent = () => {
  <>
    <ThemeProvider theme={TextTheme}>
      <Typography variant="caption">Tooltip with HTML</Typography>
    </ThemeProvider>
  </>;
};
