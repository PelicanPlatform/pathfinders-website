import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const SIZE = 300;

const graphicContainer: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: -1,
  overflow: "hidden",

  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",

  opacity: ".2",
};

const leftEndcap: SxProps = {
  display: {
    xs: "none",
    sm: "block",
  },
  transform: "scaleX(-1)",
  flexShrink: 0,
};

const middle: SxProps = {
  width: {
    xs: "100vw",
    sm: "100%",
  },
  flexGrow: 1,
};

const rightEndcap: SxProps = {
  display: {
    xs: "none",
    sm: "block",
  },
  flexShrink: 0,
};

const img: CSSProperties = {
  width: "100%",
  height: "100%",
};

const Graphic = () => {
  const width = SIZE;
  const height = SIZE;

  return (
    <Box sx={graphicContainer}>
      <Box sx={leftEndcap}>
        <Image
          style={img}
          src="/lines_end.svg"
          alt=""
          width={width}
          height={height}
        />
      </Box>
      <Box sx={middle}>
        <Image
          style={img}
          src="/lines_middle.svg"
          alt=""
          width={width}
          height={height}
        />
      </Box>
      <Box sx={rightEndcap}>
        <Image
          style={img}
          src="/lines_end.svg"
          alt=""
          width={width}
          height={height}
        />
      </Box>
    </Box>
  );
};

export default Graphic;
