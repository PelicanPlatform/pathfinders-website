import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import AwardLink from "../AwardLink";
import { CSSProperties, ReactNode } from "react";

const itemContainer: SxProps = {
  bgcolor: "primary.main",
  width: "100%",

  padding: "20px",
  borderRadius: "20px",
  boxShadow: 1,

  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logo: CSSProperties = {
  width: "200px",
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
};

const nameAndAward: CSSProperties = {
  fontSize: "1.25rem",
  textAlign: "center",
  padding: "10px 0",
};

const text: CSSProperties = {
  // fontSize: "0.75rem",
};

type PartnerProps =
  | {
      area: string;
      src: string;
      alt: string;
      name: string;
      width: number;
      height: number;
      awardId: string;
      text: string;
    }
  | {
      area: string;
      image: ReactNode;
      name: string;
      awardId: string;
      text: string;
    };

const Partner = (props: PartnerProps) => {
  return (
    <Box sx={itemContainer} gridArea={props.area}>
      {"image" in props ? (
        props.image
      ) : (
        <Image
          style={logo}
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      )}
      <span style={nameAndAward}>
        {props.name} &mdash; <AwardLink id={props.awardId} />
      </span>
      <p style={text}>{props.text}</p>
    </Box>
  );
};

export default Partner;
export { itemContainer, logo, nameAndAward };
