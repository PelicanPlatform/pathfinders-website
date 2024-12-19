import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const card: SxProps = {
  display: "flex",
  padding: "20px",
  width: "250px",
  margin: "20px",

  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "20px",
  bgcolor: "primary.main",
  boxShadow: 1,
};

const headshot: CSSProperties = {
  width: "175px",
  height: "175px",
  borderRadius: "50%",
  objectFit: "cover",
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
};

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  name: string;
  title: string;
  project: string;
};

const PersonCard = ({
  src,
  alt,
  width,
  height,
  name,
  title,
  project,
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
        <span style={text}>{title}</span>
        <span style={text}>{project}</span>
      </Box>
    </Box>
  );
};

export default PersonCard;
