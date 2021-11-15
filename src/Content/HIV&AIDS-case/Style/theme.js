import { createTheme } from "@mui/material";
const mainPalette = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#635f5d",
      secondary: "#8e8883",
      third: "#C0C0BB",
    },
  },
});
export const breaks = createTheme({
  breakpoints: {
    values: {
      xs: 460,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export const TextTheme = createTheme(mainPalette, {
  typography: {
    h1: {
      fontFamily: ["Tinos", "serif"].join(","),
      color: mainPalette.palette.text.primary,
      width: "100%",
      fontSize: "50px",
      padding: "1rem",
    },
    contentTitle: {
      display: "block",
      fontFamily: ["Tinos", "serif"].join(","),
      color: mainPalette.palette.text.primary,
      fontSize: "27px",
      marginBottom: "1rem",
    },
    tableTitle: {
      display: "block",
      fontFamily: ["Tinos", "serif"].join(","),
      color: mainPalette.palette.text.primary,
      fontSize: "27px",
      marginBottom: "1rem",
      textAlign: "center",
    },
    body1: {
      fontFamily: ["Domine", "serif"].join(","),
      color: mainPalette.palette.text.secondary,
      fontSize: "18px",
    },
    body2: {
      fontFamily: ["Domine", "serif"].join(","),
      color: mainPalette.palette.text.secondary,
      fontSize: "14px",
      fontWeight: "lighter",
    },
    body3: {
      fontFamily: ["Domine", "serif"].join(","),
      color: mainPalette.palette.text.secondary,
      fontSize: "14px",
    },

    subtitle2: {
      fontFamily: ["Domine", "serif"].join(","),
      fontSize: "14px",
      color: mainPalette.palette.text.secondary,
    },
    subtitle3: {
      fontFamily: ["Domine", "serif"].join(","),
      color: mainPalette.palette.text.secondary,
      fontSize: "10px",
    },
    boldSubtitle: {
      fontFamily: ["Domine", "serif"].join(","),
      color: mainPalette.palette.text.primary,
      fontSize: "14px",
      fontWeight: 700,
    },
    boldCaption: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      color: mainPalette.palette.text.secondary,
      fontSize: "12px",
      fontWeight: 700,
    },
    captionInfo: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      color: mainPalette.palette.text.third,
      fontSize: "12px",
    },
    captionSource: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      color: mainPalette.palette.text.third,
      fontSize: "12px",
      textAlign: "right",
    },
    captionTable: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      color: mainPalette.palette.text.third,
      fontSize: "10px",
      textAlign: "right",
    },
  },
});
