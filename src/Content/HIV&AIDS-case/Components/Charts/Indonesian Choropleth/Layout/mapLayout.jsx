import { Box } from "@mui/material";
import { TableBottom } from "./tableBottom";
import { TitleTop } from "./titleTop";

export const MapLayout = ({
  children,
  topic,
  onTopicChange,
  data,
  provinceList,
  catagories,
  breakingPoint,
}) => {
  return (
    <Box>
      <TitleTop topic={topic} onTopicChange={onTopicChange} />

      {children}

      <TableBottom
        data={data}
        provinceList={provinceList}
        catagories={catagories}
        topic={topic}
        breakingPoint={breakingPoint}
      />
    </Box>
  );
};
