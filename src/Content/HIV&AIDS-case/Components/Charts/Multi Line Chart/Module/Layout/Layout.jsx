import {
  Box,
  Typography,
  ThemeProvider,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import { TextTheme } from "../../../../../Style/theme";
import { SelectProvince } from "./SelectProvince";
import { TopLayout } from "./TopLayout";

const toggleStyle = {
  padding: "6px 12px",
  fontFamily: "Domine",
  fontSize: "0.72em",
  color: "8e8883",
  fontWeight: 600,
};
export const Layout = ({
  children,
  data,
  topic,
  onTopicChange,
  province,
  setProvince,
  provinceList,
  dataNumFormat,
}) => {
  return (
    <Box>
      <ThemeProvider theme={TextTheme}>
        <TopLayout
          Typography={Typography}
          ToggleButtonGroup={ToggleButtonGroup}
          ToggleButton={ToggleButton}
          onTopicChange={onTopicChange}
          topic={topic}
          toggleStyle={toggleStyle}
        />
      </ThemeProvider>

      {children}

      <SelectProvince
        data={data}
        topic={topic}
        provinceList={provinceList}
        province={province}
        setProvince={setProvince}
        dataNumFormat={dataNumFormat}
      />
    </Box>
  );
};
