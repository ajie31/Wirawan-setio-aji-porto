export const TooltipTable = ({
  row,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  ThemeProvider,
  Typography,
  styles,
  TextTheme,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table
        className={styles["tooltips-table"]}
        size="small"
        aria-label="caption table"
      >
        <caption>katagori Berdasarkan Umur Penderita</caption>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan="3">
              <ThemeProvider theme={TextTheme}>
                <Typography variant="boldSubtitle">
                  {row ? row.province : "Loading..."}
                </Typography>
              </ThemeProvider>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Katagori</TableCell>
            <TableCell align="right">Pria</TableCell>
            <TableCell align="right">Wanita</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row ? (
            row.features.map((prop) => (
              <TableRow key={prop.catagory}>
                <TableCell component="th" scope="row">
                  {prop.catagory}
                </TableCell>
                <TableCell align="right">{prop.L}</TableCell>
                <TableCell align="right">{prop.P}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Loading...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
