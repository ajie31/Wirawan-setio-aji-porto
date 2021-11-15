import { TextTheme } from "../../../../Style/theme";
import { Typography, ThemeProvider, Box } from "@mui/material";
export const Layout = ({ children }) => {
  return (
    <Box className="chart-one-title">
      <ThemeProvider theme={TextTheme}>
        <Typography variant="contentTitle">
          Kasus Hiv & AIDS Tahun 2011 - 2020
        </Typography>
        <Typography variant="body2">
          jumlah kasus HIV positif yang dilaporkan dari tahun ketahun cenderung
          meningkat. Namun, pada tahun 2020 merupakan yang terendah sejak empat
          tahun terakhir, yaitu dilaporkan sebanyak 41.987 kasus.
        </Typography>
      </ThemeProvider>

      {children}
    </Box>
  );
};
