import { json } from "d3";
import { feature, mesh } from "topojson-client";
import { useState, useEffect } from "react";

const DATA_TOPOLOGY =
  "https://gist.githubusercontent.com/ajie31/3144875bad9705e2b2b544909c022276/raw/54e4746de631fb57d604db1ef48316f7189a0a73/Peta%2520Indonesia%2520Provinsi.json";

export const GetData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    json(DATA_TOPOLOGY).then((topology) => {
      const { gadm36_IDN_1: geo_data } = topology.objects;
      setData({
        Indonesia: feature(topology, geo_data),
        interiors: mesh(topology, geo_data, (a, b) => a !== b),
      });
    });
  }, []);

  return data;
};
