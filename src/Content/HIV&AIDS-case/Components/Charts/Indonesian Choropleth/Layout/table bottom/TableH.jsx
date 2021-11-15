const headCellRow = { backgroundColor: "#ebebeb" };
const cellStyle = { maxWidth: 180 };
export const TableH = ({
  catagories,
  breakingPoint,
  alignment,
  TableHead,
  TableRow,
  TableCell,
  Typography,
}) => (
  <TableHead>
    <TableRow style={headCellRow}>
      <TableCell style={cellStyle}>Provinsi</TableCell>
      {!breakingPoint ? (
        catagories.map((c) => (
          <TableCell key={c} align="right">
            <Typography variant="boldCaption">{c}</Typography>
          </TableCell>
        ))
      ) : (
        <TableCell align="center">{alignment}</TableCell>
      )}
    </TableRow>
  </TableHead>
);
