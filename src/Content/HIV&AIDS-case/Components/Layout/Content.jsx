import { VisualOne } from "./Content Components/VisualOne";
import { VisualTwo } from "./Content Components/VisualTwo";
import { VisualThree } from "./Content Components/VisualThree";
import { AboutSection } from "./Content Components/AboutSection";

export const Content = ({
  Paper,
  Grid,
  ThemeProvider,
  Typography,
  dataSum,
  visualProps,
  LineChart,
  MultiLineChart,
  Choropleth,
  dataPerProvince,
  mostRecentProvinceData,
  dataTopology,
  dataByAge,
  theme,
  breakSmall,
}) => (
  <>
    <Grid spacing="16" container>
      <Grid className="line-charts" xl={8} lg={12} xs={12} item>
        <Grid className="total-cases-annually" sx={{ mb: 2 }} item>
          <VisualOne
            Paper={Paper}
            LineChart={LineChart}
            dataSum={dataSum}
            visualProps={visualProps}
          />
        </Grid>
        <Grid className="provinces-cases-annually" item>
          <VisualTwo
            Paper={Paper}
            MultiLineChart={MultiLineChart}
            dataPerProvince={dataPerProvince}
            visualProps={visualProps}
          />
        </Grid>
      </Grid>

      <Grid className="about-section" xl={4} lg={12} xs={12} item>
        <AboutSection
          Paper={Paper}
          ThemeProvider={ThemeProvider}
          Typography={Typography}
          theme={theme}
        />
      </Grid>
    </Grid>
    <Grid className="Map Data" xl={12} md={12} xs={12} item>
      <VisualThree
        Paper={Paper}
        Choropleth={Choropleth}
        mostRecentProvinceData={mostRecentProvinceData}
        dataTopology={dataTopology}
        dataByAge={dataByAge}
        visualProps={visualProps}
        breakSmall={breakSmall}
      />
    </Grid>
  </>
);
