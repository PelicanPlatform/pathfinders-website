import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import AwardLink from "../AwardLink";
import { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Launch } from "@mui/icons-material";

const itemContainer: SxProps = {
  bgcolor: "primary.main",
  maxWidth: "100%",

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
  flexGrow: 1,
};

const nameAndAward: CSSProperties = {
  fontSize: "1.25rem",
  textAlign: "center",
  flexShrink: 0,
};

const nameLink: CSSProperties = {
  fontStyle: "italic",
  textDecoration: "underline",
};

type PartnerImage =
  | {
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      image: ReactNode;
    };

type PartnerProps = PartnerImage & {
  area: string;
  name: string;
  nameLink?: string;
  awardId: string;
  containerStyles?: SxProps;
};

const Partner = (props: PartnerProps) => {
  return (
    <Box
      sx={{ ...itemContainer, ...props.containerStyles }}
      gridArea={props.area}
    >
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
        {props.nameLink ? (
          <Link href={props.nameLink} target="_blank" style={nameLink}>
            {props.name}
          </Link>
        ) : (
          <span>{props.name}</span>
        )}{" "}
        &mdash; <AwardLink id={props.awardId} />
      </span>
    </Box>
  );
};

export default Partner;
export { itemContainer, logo, nameAndAward };
