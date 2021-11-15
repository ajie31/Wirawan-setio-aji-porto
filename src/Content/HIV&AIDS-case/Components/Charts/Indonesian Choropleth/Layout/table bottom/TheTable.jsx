import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  Collapse,
  ToggleButton,
  ToggleButtonGroup,
  ThemeProvider,
  Typography,
  Container,
} from "@mui/material";

import { TableB } from "./TableB";
import { TableH } from "./TableH";
import { ToggleCatagory } from "./ToggleCatagory";

const styleTableContainer = {
  transform: "rotateX(180deg)",
};
const collapseStyle = { overflow: "visible", transform: "rotateX(180deg)" };
const tableBreakPoint = (breakingPoint) => {
  return { minWidth: breakingPoint ? 430 : 920 };
};
const collapseButtonStyle = { width: "100%", padding: "8px" };

export const TheTable = ({
  data,
  provinceList,
  catagories,
  checked,
  alignment,
  topic,
  breakingPoint,
  handleChangeCollapse,
  handleChangeTable,
  TextTheme,
}) => (
  <ThemeProvider theme={TextTheme}>
    <Container style={{ padding: 0, mb: 2 }}>
      <Typography variant="tableTitle">{`Kasus ${topic} Menurut Katagori Umur`}</Typography>

      <ToggleCatagory
        alignment={alignment}
        handleChangeTable={handleChangeTable}
        catagories={catagories}
        breakingPoint={breakingPoint}
        ToggleButtonGroup={ToggleButtonGroup}
        ToggleButton={ToggleButton}
        Typography={Typography}
      />
    </Container>
    <TableContainer style={styleTableContainer} component={Paper}>
      <Collapse style={collapseStyle} in={checked} collapsedSize={220}>
        <Table
          style={tableBreakPoint(breakingPoint)}
          size="small"
          aria-label="simple table"
        >
          <TableH
            catagories={catagories}
            breakingPoint={breakingPoint}
            alignment={alignment}
            TableHead={TableHead}
            TableRow={TableRow}
            TableCell={TableCell}
            Typography={Typography}
          />
          <TableB
            data={data}
            provinceList={provinceList}
            alignment={alignment}
            breakingPoint={breakingPoint}
            TableBody={TableBody}
            TableRow={TableRow}
            TableCell={TableCell}
            Typography={Typography}
          />
        </Table>
      </Collapse>
    </TableContainer>
    <ToggleButton
      style={collapseButtonStyle}
      value="check"
      onChange={handleChangeCollapse}
    >
      <Typography variant="caption">
        {checked ? "Show Less" : "Show More"}
      </Typography>
    </ToggleButton>
  </ThemeProvider>
);
