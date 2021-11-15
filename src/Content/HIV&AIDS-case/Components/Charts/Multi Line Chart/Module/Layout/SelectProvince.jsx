import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { TextTheme } from "../../../../../Style/theme";

const divStyle = { width: "98%", whiteSpace: "nowrap", marginTop: "16px" };
const boxStyle = { overflowX: "scroll", my: 2 };

export const SelectProvince = ({
  data,
  topic,
  provinceList,
  province,
  setProvince,
  dataNumFormat,
}) => {
  const handleSelectProvince = (event, newAlignment) => {
    setProvince(newAlignment);
  };
  console.log(data.get("Jawa Timur")[topic][9]);
  return (
    <div style={divStyle}>
      <ThemeProvider theme={TextTheme}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1">Daftar Provinsi</Typography>
          <Typography variant="captionInfo">
            (Urutan kasus terbanyak pada tahun 2020 dari kiri)
          </Typography>
        </Box>
      </ThemeProvider>
      <Box component="div" sx={boxStyle}>
        <ToggleButtonGroup
          value={province}
          exclusive
          onChange={handleSelectProvince}
          aria-label="text alignment"
        >
          {provinceList.map((p, i) => (
            <ToggleButton
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                flexDirection: "column",
              }}
              key={p + i}
              value={p}
              aria-label={`Provinsi ${p}`}
            >
              <ThemeProvider theme={TextTheme}>
                <Typography variant="captionInfo">{`#${i + 1}`}</Typography>
                <Typography variant="caption">{p}</Typography>
                <Typography
                  style={{ textTransform: "lowercase" }}
                  variant="caption"
                >{`${dataNumFormat(
                  data.get(p)[topic][9].cases
                )} Kasus`}</Typography>
              </ThemeProvider>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </div>
  );
};
