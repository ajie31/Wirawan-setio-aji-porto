import {
  max,
  geoPath,
  geoEquirectangular,
  scaleSequential,
  interpolateOranges,
  interpolatePurples,
} from "d3";
import { useState, useMemo } from "react";
import { MapMark } from "./mapMark";
import { Legend } from "./legend";
import { MapLayout } from "../Layout/mapLayout";
import { Tooltip } from "../Tooltips/Tooltip";
import { getProvinces, getKeyDataByAge } from "../../../Data/dataProcess";

const margin = { top: 100, right: 20, bottom: 20, left: 20 };

const projection = geoEquirectangular();
const pathGenerator = geoPath(projection);

const colorValue = (d) => d.cases;

const rowByProvince = new Map();
const ageRowByProvince = new Map();

export const Render = ({
  dataTopology,
  dataPerProvince,
  figureProps,
  dataByAge,
  breakingPoint,
}) => {
  const [topic, setTopic] = useState("HIV");
  const [isEnter, setIsEnter] = useState(false);
  const [provinceData, setProvinceData] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onTopicChange = (event, newTopic) => {
    setTopic(newTopic);
  };
  const onMouseOverHandler = (selected) => {
    setIsEnter(!isEnter);
    setProvinceData(ageRowByProvince.get(selected.dataset["provinsi"]));
  };
  const onMouseMoveHandler = (position) => setMousePosition(position);
  const onMouseLeaveHandler = () => setIsEnter(false);

  const { Indonesia, interiors } = dataTopology;
  const { width, height } = figureProps;

  const catagories = useMemo(() => {
    return dataByAge[topic].map((d) => d.catagory);
  }, [topic, dataByAge]);

  dataPerProvince[topic].forEach((d) => {
    rowByProvince.set(d.province, d);
  });
  getKeyDataByAge(ageRowByProvince, dataByAge[topic]);

  const colorScale = scaleSequential(
    topic === "HIV" ? interpolateOranges : interpolatePurples
  ).domain([0, max(dataPerProvince[topic], colorValue)]);

  const innerWidth = figureProps.width - margin.left - margin.right;
  const innerHeight = figureProps.height - margin.top - margin.bottom;

  projection.fitSize([innerWidth, innerHeight], Indonesia);

  return (
    <MapLayout
      topic={topic}
      onTopicChange={onTopicChange}
      data={ageRowByProvince}
      provinceList={getProvinces()}
      catagories={catagories}
      breakingPoint={breakingPoint}
    >
      <svg preserveAspectRatio="xMinYMin" viewBox={`0 0 ${width} ${height}`}>
        {/* <Decoration pathGenerator={pathGenerator} /> */}
        <MapMark
          data={Indonesia}
          interiors={interiors}
          pathGenerator={pathGenerator}
          colorScale={colorScale}
          colorValue={colorValue}
          rowByProvince={rowByProvince}
          margin={margin}
          onMouseOverHandler={onMouseOverHandler}
          onMouseMoveHandler={onMouseMoveHandler}
          onMouseLeaveHandler={onMouseLeaveHandler}
        />
        <Legend colorScale={colorScale} innerWidth={innerWidth} />
      </svg>
      <Tooltip
        provinceData={provinceData}
        position={mousePosition}
        isEnter={isEnter}
        breakingPoint={breakingPoint}
      />
    </MapLayout>
  );
};
