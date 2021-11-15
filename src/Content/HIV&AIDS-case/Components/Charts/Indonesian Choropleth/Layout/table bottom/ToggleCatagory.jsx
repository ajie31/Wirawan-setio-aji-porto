const toggleStyle = (breakingPoint) => {
  return {
    display: !breakingPoint ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
  };
};

const toggleButtonStyle = { p: 1, textTransform: "lowercase" };

export const ToggleCatagory = ({
  alignment,
  handleChangeTable,
  catagories,
  breakingPoint,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
}) => (
  <ToggleButtonGroup
    style={toggleStyle(breakingPoint)}
    value={alignment}
    exclusive
    onChange={handleChangeTable}
  >
    {catagories.map((c) => (
      <ToggleButton
        sx={toggleButtonStyle}
        key={c}
        value={c}
        disabled={alignment === c}
        fullWidth="none"
      >
        <Typography variant="caption">{c}</Typography>
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);
