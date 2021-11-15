import { useState, useEffect } from "react";

import { setupRowData, fetchAllData, fetchData, rowByAge } from "./dataProcess";

const DATA_URI_HIV =
  "https://gist.githubusercontent.com/ajie31/f008fa7953ff5b87ec14927451d13a42/raw/Data%2520kasus%2520HIV%2520Positif%2520setiap%2520provinsi%25202010%25202020.csv";

const HIVCategories = [
  {
    category: "< 4",
    URL: "https://gist.githubusercontent.com/ajie31/f008fa7953ff5b87ec14927451d13a42/raw/HIV%2520positif%2520umur%2520kurang%2520dari%25204%2520tahun.csv",
  },
  {
    category: "5 - 14",
    URL: "https://gist.githubusercontent.com/ajie31/f008fa7953ff5b87ec14927451d13a42/raw/HIV%2520positif%2520umur%25205%2520hingga%252014%2520.csv",
  },
  {
    category: "15 - 19",
    URL: "https://gist.githubusercontent.com/ajie31/f008fa7953ff5b87ec14927451d13a42/raw/HIV%2520positif%2520umur%252015%2520hingga%252019%2520.csv",
  },
  {
    category: "20 - 24",
    URL: "https://gist.githubusercontent.com/ajie31/f008fa7953ff5b87ec14927451d13a42/raw/HIV%2520positif%2520umur%252020%2520hingga%252024%2520.csv",
  },
  {
    category: "25 - 49",
    URL: "https://gist.githubusercontent.com/ajie31/f008fa7953ff5b87ec14927451d13a42/raw/HIV%2520positif%2520umur%252025%2520hingga%252049%2520.csv",
  },
  {
    category: "> 50",
    URL: "https://gist.githubusercontent.com/ajie31/f008fa7953ff5b87ec14927451d13a42/raw/HIV%2520positif%2520umur%252025%2520hingga%252049%2520.csv",
  },
];

export const GetDataHIV = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([fetchData(DATA_URI_HIV), fetchAllData(HIVCategories)]).then(
      ([HIV, categoryHIV]) => {
        const newRowHIV = setupRowData(HIV);
        setData({
          annually: newRowHIV,
          byAge: rowByAge(categoryHIV, HIVCategories),
        });
      }
    );
  }, []);

  return data;
};
