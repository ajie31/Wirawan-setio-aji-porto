import { GetData } from "./GetData/GetData";
import { Render } from "./Map/render";

const Choropleth = () => {
  const data_topology = GetData();

  if (!data_topology) {
    return <pre>Loading Data...</pre>;
  }

  return <Render data={data_topology} />;
};

export default App;
