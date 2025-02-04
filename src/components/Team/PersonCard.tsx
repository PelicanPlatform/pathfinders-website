import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const card: SxProps = {
  display: "flex",
  padding: "20px",
  width: "100%",
  flexGrow: 1,

  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "20px",
  bgcolor: "primary.main",
  boxShadow: 1,
};

const headshot: CSSProperties = {
  borderRadius: "50%",
  objectFit: "cover",
  aspectRatio: "1/1",
  width: "100%",
  height: "auto",
};

const nameStyle: CSSProperties = {
  fontWeight: 500,
  margin: "10px 0",
};

const textSpacer: SxProps = {
  marginRight: "auto",
};

const text: CSSProperties = {
  display: "block",
  textAlign: "center",
};

type Props = {
  src: string;
  alt: string;
  name: string;
  title: string;
  project: string;
  width?: number;
  height?: number;
};

const PersonCard = ({
  src,
  alt,
  name,
  project,
  width = 200,
  height = 200,
}: Props) => {
  return (
    <Box sx={card}>
      <Image
        style={headshot}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <h3 style={nameStyle}>{name}</h3>
      <Box sx={textSpacer}>
        <span style={text}>{project}</span>
      </Box>
    </Box>
  );
};

export default PersonCard;
