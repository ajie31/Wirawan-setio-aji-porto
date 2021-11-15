export const AboutSection = ({ Paper, ThemeProvider, Typography, theme }) => (
  <Paper
    elevation={0}
    sx={{
      borderTop: 2,
      borderRadius: 0,
      borderColor: "#635f5d",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    }}
  >
    <ThemeProvider theme={theme}>
      <Typography variant="contentTitle">Tentang HIV & AIDS</Typography>
      <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
        <Typography variant="body1">
          <li>
            Human Immunodeficiency Virus (HIV) adalah virus yang menginfeksi sel
            darah putih yang menyebabkan turunnya kekebalan tubuh manusia.
            Infeksi tersebut menyebabkan penderita mengalami penurunan kekebalan
            sehingga sangat mudah untuk terinfeksi berbagai macam penyakit lain.
          </li>
          <li style={{ marginTop: "10px" }}>
            Acquired Immune Deficiency Syndrome (AIDS) adalah sekumpulan gejala
            yang timbul karena turunnya kekebalan tubuh yang disebabkan infeksi
            oleh HIV.
          </li>
          <li style={{ marginTop: "10px" }}>
            Orang yang terinfeksi HIV memerlukan pengobatan Antiretroviral (ARV)
            untuk menekan jumlah virus HIV di dalam tubuh.
          </li>
          <li style={{ marginTop: "10px" }}>
            Virus yang tertekan (tersupresi) tidak berpotensi menular kepada
            orang lain, dan orang dengan HIV akan memiliki kualitas hidup yang
            baik.
          </li>
        </Typography>
      </ul>
      <br />
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Typography variant="captionSource">
          sumber : Profil Kesehatan Indonesia Tahun 2020
        </Typography>
      </div>
    </ThemeProvider>
  </Paper>
);
