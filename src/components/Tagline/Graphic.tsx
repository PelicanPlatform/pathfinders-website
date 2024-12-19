import { Box } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const size = 300;
const inverseMargin = "106px";

const graphicContainer: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: -1,
  overflow: "hidden",
  paddingTop: `110px`,

  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  opacity: 0.05,
};

const component: CSSProperties = {};

const leftEndcap: CSSProperties = {
  ...component,
  margin: `-${inverseMargin}`,
  transform: "scaleX(-1)",
  flexShrink: 0,
};

const middle: CSSProperties = {
  ...component,
  margin: `-${inverseMargin} 0`,
  width: "100%",
  flexGrow: 1,
};

const rightEndcap: CSSProperties = {
  ...component,
  margin: `-${inverseMargin}`,
  flexShrink: 0,
};

const Graphic = () => {
  const width = size;
  const height = size;

  return (
    <Box sx={graphicContainer}>
      <Image
        style={leftEndcap}
        src="/lines_end.svg"
        alt=""
        width={width}
        height={height}
      />
      <Image
        style={middle}
        src="/lines_middle.svg"
        alt=""
        width={width}
        height={height}
      />
      <Image
        style={rightEndcap}
        src="/lines_end.svg"
        alt=""
        width={width}
        height={height}
      />
    </Box>
  );
};

export default Graphic;
