import { useState } from "react";
import { TextTheme } from "../../../../Style/theme";
import { TheTable } from "./table bottom/TheTable";

export const TableBottom = ({
  data,
  provinceList,
  catagories,
  topic,
  breakingPoint,
}) => {
  const [checked, setChecked] = useState(false);
  const [alignment, setAlignment] = useState(catagories[0]);

  const handleChangeCollapse = () => {
    setChecked((prev) => !prev);
  };

  const handleChangeTable = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <TheTable
      data={data}
      catagories={catagories}
      provinceList={provinceList}
      checked={checked}
      alignment={alignment}
      topic={topic}
      breakingPoint={breakingPoint}
      handleChangeCollapse={handleChangeCollapse}
      handleChangeTable={handleChangeTable}
      TextTheme={TextTheme}
    />
  );
};
