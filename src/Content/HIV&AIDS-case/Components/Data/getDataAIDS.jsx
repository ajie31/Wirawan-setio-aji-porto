import { useState, useEffect } from "react";

import {
  setupRowData,
  setYears,
  setProvinces,
  fetchData,
  fetchAllData,
  rowByAge,
} from "./dataProcess";

const DATA_URI_AIDS =
  "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/kasus%2520aids%2520tiap%2520provinsi%25202010%25202020%2520.csv";

const AIDSCategories = [
  {
    category: "< 4",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/Kasus%2520AIDS%2520umur%25204%2520kebawah.csv",
  },
  {
    category: "5 - 14",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/AIDS%2520umur%25205%2520hingga%252014.csv",
  },
  {
    category: "15 - 19",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/Kasus%2520AIDS%2520umur%252015%2520hingga%252019.csv",
  },
  {
    category: "20 - 29",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/AIDS%2520umur%252020%2520hingga%252029.csv",
  },
  {
    category: "30 - 49",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/Kasus%2520AIDS%2520umur%252030%2520hingga%252049.csv",
  },
  {
    category: "> 50",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/Kasus%2520AIDS%2520umur%252050%2520keatas.csv",
  },

  {
    category: "Umur ?",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/kasus%2520aids%2520Umur%2520Tidak%2520Diketahui.csv",
  },
  {
    category: "Gender ?",
    URL: "https://gist.githubusercontent.com/ajie31/258267f127b81824f5d8d5cd50f266eb/raw/kasus%2520aids%2520Jenis%2520Kelamin%2520Tidak%2520Diketahui.csv",
  },
];

export const GetDataAIDS = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([fetchData(DATA_URI_AIDS), fetchAllData(AIDSCategories)]).then(
      ([AIDS, categoryAIDS]) => {
        const newRowAIDS = setupRowData(AIDS);
        setYears(AIDS);
        setProvinces(Object.keys(newRowAIDS));

        setData({
          annually: newRowAIDS,
          byAge: rowByAge(categoryAIDS, AIDSCategories),
        });
      }
    );
  }, []);

  return data;
};
