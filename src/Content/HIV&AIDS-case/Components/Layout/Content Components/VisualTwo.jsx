export const VisualTwo = ({
  Paper,
  MultiLineChart,
  dataPerProvince,
  visualProps,
}) => (
  <Paper
    sx={{
      pt: 2,
      borderTop: 2,
      borderRadius: 0,
      borderColor: "#8e8883",
    }}
    elevation={0}
  >
    <MultiLineChart
      className="cases-on-provinces"
      data={dataPerProvince}
      figureProps={visualProps.two}
    />
  </Paper>
);
