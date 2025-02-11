import { Launch } from "@mui/icons-material";
import { Box, Link as MUILink, SxProps } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import AwardLink from "../AwardLink";

const itemContainer: SxProps = {
  display: "flex",
  flexDirection: "column",

  bgcolor: "primary.main",
  maxWidth: "100%",

  padding: "20px",
  borderRadius: "20px",
  boxShadow: 1,
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
  awardId: string;
  aboutLink: string;
  containerSx?: SxProps;
};

const Partner = (props: PartnerProps) => {
  return (
    <Box sx={{ ...itemContainer, ...props.containerSx }} gridArea={props.area}>
      <Box flexGrow={1}>
        {"image" in props ? (
          <Box>{props.image}</Box>
        ) : (
          <Image
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
        )}
      </Box>
      <Box>
        <span
          style={{
            fontSize: "1.25rem",
          }}
        >
          <span>
            {props.name} &mdash; <AwardLink id={props.awardId} />
          </span>
          <br />
        </span>

        <MUILink
          width="fit-content"
          component={Link}
          href={props.aboutLink}
          target="_blank"
          color="#000"
          fontSize="1rem"
          sx={{
            cursor: "pointer",
            fontStyle: "italic",
            textDecoration: "none",
          }}
          display="flex"
          alignItems="center"
        >
          <Box component="span" mr="5px">
            Learn More
          </Box>
          <Launch fontSize="small" />
        </MUILink>
      </Box>
    </Box>
  );
};

export default Partner;
