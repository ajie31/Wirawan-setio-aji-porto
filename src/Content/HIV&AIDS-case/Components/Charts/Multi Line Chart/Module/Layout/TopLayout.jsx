export const TopLayout = ({
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  onTopicChange,
  topic,
  toggleStyle,
}) => {
  return (
    <>
      <Typography variant="contentTitle">
        {`Kasus ${topic} Di Setiap Provinsi`}
      </Typography>
      <Typography variant="body2">
        Terdapat 5 provinsi dengan jumlah kasus HIV tertinggi adalah DK! Jakarta
        , diikuti Jawa Timur , Jawa Barat , Papua , dan Jawa Tengah. Dan 5
        provinsi dengan jumlah AIDS terbanyak adalah Papua , Jawa Timur, Jawa
        Tengah, DKI Jakarta , dan Bali.
      </Typography>
      <ToggleButtonGroup
        sx={{ mt: 2 }}
        value={topic}
        exclusive
        onChange={onTopicChange}
      >
        <ToggleButton
          disabled={topic === "HIV"}
          style={toggleStyle}
          value="HIV"
        >
          Kasus HIV
        </ToggleButton>
        <ToggleButton
          disabled={topic === "AIDS"}
          style={toggleStyle}
          value="AIDS"
        >
          Kasus AIDS
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
