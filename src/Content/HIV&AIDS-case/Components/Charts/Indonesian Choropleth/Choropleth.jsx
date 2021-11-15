import { Render } from "./Map/render";

export const Choropleth = ({
  dataPerProvince,
  dataTopology,
  figureProps,
  dataByAge,
  breakingPoint,
}) => {
  return (
    <Render
      dataTopology={dataTopology}
      dataPerProvince={dataPerProvince}
      figureProps={figureProps}
      dataByAge={dataByAge}
      breakingPoint={breakingPoint}
    />
  );
};
