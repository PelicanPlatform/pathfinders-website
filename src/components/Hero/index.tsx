import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";
import PartnerList from "../PartnerList";

const heroContainer: SxProps = {
  display: {
    md: "flex",
    sm: "block",
  },
  marginTop: {
    md: "20px 0",
  },
  width: "100%",

  justifyContent: "space-around",
  alignItems: "center",
  gap: "10px",
};

const left: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: {
    md: "100%",
    lg: "50%",
  },
  padding: "25px",
};

const right: SxProps = {
  width: {
    md: "100%",
    lg: "50%",
  },
  padding: {
    md: "0",
    lg: "25px",
  },
};

const tagline: CSSProperties = {
  fontSize: "1.5rem",
  lineHeight: "1.25",
  textAlign: "left",
};

const Hero = () => {
  return (
    <Box sx={heroContainer} id="about">
      <Box sx={left}>
        <Image
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          src="/images/pelican_concept_map.png"
          alt="Pelican Concept Map"
          width={1000 * 0.5}
          height={560 * 0.5}
        />
        <p style={tagline}>
          A collaboration between 5 projects, working to innovate science-led
          pathways through the NSF cyberinfrastructure landscape.
        </p>
      </Box>
      <Box sx={right}>
        <PartnerList />
      </Box>
    </Box>
  );
};

export default Hero;
