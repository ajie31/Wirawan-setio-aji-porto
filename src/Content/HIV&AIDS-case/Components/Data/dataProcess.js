import { csv } from "d3";
let dataYears = [];
let provinces = [];

export const setupRowData = (data) => {
  let newRow = {};
  data.map((d) => {
    data.columns.map((k) => {
      k === "Provinsi"
        ? (newRow[d[k]] = {})
        : (newRow[d["Provinsi"]][k] = +d[k]);
    });
  });

  return newRow;
};

export const setYears = (data) => {
  dataYears = data.columns.filter((k) => k !== "Provinsi" && k !== "2010");
};
export const setProvinces = (data) => {
  provinces = data;
};
export const getProvinces = () => provinces;

export const fetchData = async (data) => {
  return await csv(data);
};

export const fetchAllData = async (catagories) => {
  const loadDataPromises = catagories.map((d) => csv(d.URL));
  return await Promise.all(loadDataPromises);
};

//#region data by age data process

export const rowByAge = (data, categories) => {
  return data.map((d, i) => {
    return {
      catagory: categories[i].category,
      properties:
        categories[i].category === "Gender ?"
          ? dataByAgePropertyNoGender(d)
          : dataByAgeProperty(d),
    };
  });
};

const dataByAgeProperty = (data) => {
  return data.map((d) => {
    return {
      Provinsi: d["Provinsi"],
      L: d["L"] === "-" ? "-" : +d["L"],
      P: d["P"] === "-" ? "-" : +d["P"],
    };
  });
};
const dataByAgePropertyNoGender = (data) => {
  return data.map((d) => {
    return {
      Provinsi: d["Provinsi"],
      total: d["total"] === "-" ? "-" : +d["total"],
    };
  });
};

export const getKeyDataByAge = (newRow, data) =>
  provinces.map((p, i) =>
    newRow.set(p, {
      province: p,
      features: data.map((d) => {
        return d.catagory === "Gender ?"
          ? {
              catagory: d.catagory,
              total: d.properties[i].total,
            }
          : {
              catagory: d.catagory,
              L: d.properties[i].L,
              P: d.properties[i].P,
            };
      }),
    })
  );

//#region annual perProvinces Data Proces

//? Area Chart
export const sumAllProvincesAnnualData = ({ annually }) => {
  let result = [];
  dataYears
    ? dataYears.map((date) => {
        let sums = 0;
        Object.keys(annually).map((keys) => (sums += annually[keys][date]));
        result.push({ date: new Date(date), cases: sums });
      })
    : {};
  return result;
};

//?multi line chart
export const MultiLineRowData = ({ annually }) => {
  return Object.keys(annually).map((key) => {
    let result = [];
    dataYears.map((date) =>
      result.push({ date: new Date(date), cases: annually[key][date] })
    );
    return { province: key, properties: result };
  });
};

export const mergePerProvince = (data) => {
  const reducerDataMerge = (previousArray, currentArray) => [
    ...previousArray,
    ...currentArray.properties,
  ];
  return data.reduce(reducerDataMerge, []);
};

export const currentProvinceData = ({ annually }) => {
  return Object.keys(annually).map((k) => {
    return { province: k, cases: annually[k][dataYears[dataYears.length - 1]] };
  });
};

export const getSortedProvince = (data) => {
  return data
    .map((d) => d)
    .sort((a, b) =>
      b.properties[b.properties.length - 1].cases >
      a.properties[a.properties.length - 1].cases
        ? 1
        : -1
    )
    .map((d) => d.province);
};
