import {
  Grid,
  Paper,
  Typography,
  Container,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

import { LineChart } from "./Components/Charts/Line Chart/lineChart";
import { MultiLineChart } from "./Components/Charts/Multi Line Chart/multiLineChart";
import { Choropleth } from "./Components/Charts/Indonesian Choropleth/Choropleth";

import { Header } from "../../Layout/Header";
import { Title } from "./Components/Layout/Title";
import { Content } from "./Components/Layout/Content";

import { GetDataAIDS } from "./Components/Data/getDataAIDS";
import { GetDataHIV } from "./Components/Data/getDataHIV";
import { GetDataTopology } from "./Components/Data/getDataTopology";

import {
  sumAllProvincesAnnualData,
  MultiLineRowData,
  currentProvinceData,
} from "./Components/Data/dataProcess";

import { TextTheme, breaks } from "./Style/theme";

const visualProps = {
  one: { width: 960, height: 520 },
  two: { width: 960, height: 520 },
  three: { width: 1030, height: 620 },
};

export const HivAidsCase = () => {
  const dataHIV = GetDataHIV();
  const dataAIDS = GetDataAIDS();
  const dataTopology = GetDataTopology();
  const breakSmall = useMediaQuery(breaks.breakpoints.down("sm"));
  const breakMedium = useMediaQuery(breaks.breakpoints.down("md"));
  // TODO: Add loading Animation at Future
  if (!dataAIDS || !dataHIV || !dataTopology) {
    return <pre>Loading...</pre>;
  }

  const dataPerProvince = {
    HIV: MultiLineRowData(dataHIV),
    AIDS: MultiLineRowData(dataAIDS),
  };

  const dataSum = {
    HIV: sumAllProvincesAnnualData(dataHIV),
    AIDS: sumAllProvincesAnnualData(dataAIDS),
  };

  const mostRecentProvinceData = {
    HIV: currentProvinceData(dataHIV),
    AIDS: currentProvinceData(dataAIDS),
  };
  const dataByAge = {
    HIV: dataHIV.byAge,
    AIDS: dataAIDS.byAge,
  };

  return (
    <Container
      style={{ maxWidth: breakSmall ? "100%" : breakMedium ? "80%" : "89%" }}
    >
      <Header />

      <Grid container>
        {/* Title */}
        <Title
          Grid={Grid}
          Typography={Typography}
          ThemeProvider={ThemeProvider}
          theme={TextTheme}
        />
        {/* Title */}

        {/* container */}
        <Content
          Paper={Paper}
          Grid={Grid}
          ThemeProvider={ThemeProvider}
          Typography={Typography}
          dataSum={dataSum}
          visualProps={visualProps}
          LineChart={LineChart}
          MultiLineChart={MultiLineChart}
          Choropleth={Choropleth}
          dataPerProvince={dataPerProvince}
          mostRecentProvinceData={mostRecentProvinceData}
          dataTopology={dataTopology}
          dataByAge={dataByAge}
          theme={TextTheme}
          breakSmall={breakSmall}
        />
        {/* container */}
      </Grid>
    </Container>
  );
};
