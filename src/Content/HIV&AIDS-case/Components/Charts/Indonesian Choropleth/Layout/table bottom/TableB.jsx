const styleBodyRow = { "&:last-child td, &:last-child th": { border: 0 } };
export const TableB = ({
  data,
  provinceList,
  alignment,
  breakingPoint,
  TableBody,
  TableRow,
  TableCell,
  Typography,
}) => (
  <TableBody>
    {provinceList.map((prov) => (
      <TableRow key={prov} sx={styleBodyRow}>
        <TableCell component="th" scope="row">
          <Typography variant="subtitle1">{data.get(prov).province}</Typography>
        </TableCell>
        {data.get(prov).features.map((feature) =>
          !breakingPoint ? (
            feature.catagory === "Gender ?" ? (
              <TableCell key={feature.catagory} align="right">
                <Typography variant="subtitle1">{feature.total}</Typography>
              </TableCell>
            ) : (
              <TableCell key={feature.catagory} align="right">
                <Typography variant="subtitle1">
                  {(feature.L !== "-" ? feature.L : 0) +
                    (feature.P !== "-" ? feature.L : 0)}
                </Typography>
              </TableCell>
            )
          ) : breakingPoint &&
            feature.catagory === alignment &&
            alignment === "Gender ?" ? (
            <TableCell key={feature.catagory} align="center">
              <Typography variant="subtitle1"> {feature.total}</Typography>
            </TableCell>
          ) : breakingPoint &&
            feature.catagory === alignment &&
            alignment !== "Gender ?" ? (
            <TableCell key={feature.catagory} align="center">
              <Typography variant="subtitle1">
                {(feature.L !== "-" ? feature.L : 0) +
                  (feature.P !== "-" ? feature.L : 0)}
              </Typography>
            </TableCell>
          ) : null
        )}
      </TableRow>
    ))}
  </TableBody>
);
