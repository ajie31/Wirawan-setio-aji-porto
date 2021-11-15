import { geoPath, geoEquirectangular, geoGraticule } from "d3";
import { Map } from "./map";
import { Decoration } from "./decoration";

const height = 500;
const width = 960;

const projection = geoEquirectangular();
const pathGenerator = geoPath(projection);
const graticule = geoGraticule();

export const Render = ({ data }) => {
  const { Indonesia, interiors } = data;

  projection.fitSize([width, height], Indonesia);

  return (
    <svg preserveAspectRatio="xMinYMin" viewBox={`0 0 ${width} ${height}`}>
      <g>
        <Decoration pathGenerator={pathGenerator} graticule={graticule} />
        <Map
          data={Indonesia}
          interiors={interiors}
          pathGenerator={pathGenerator}
        />
      </g>
    </svg>
  );
};
