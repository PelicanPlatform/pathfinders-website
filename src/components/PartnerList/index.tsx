import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";
import SonarAILogo from "./SonarAILogo";

const grid: SxProps = {
  width: "100%",
  display: "grid",
  gap: "10px",
  gridAutoColumns: "1fr",
  gridTemplateAreas: `
    "a a b b"
    "c c d d"
    "e e e e"
  `,
};

const itemContainer: SxProps = {
  bgcolor: "primary.main",
  width: "100%",

  margin: {
    lg: "0",
    md: "0 auto",
  },
  padding: "20px",
  borderRadius: "20px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logo: CSSProperties = {
  width: "100%",
  height: "auto",
  objectFit: "contain",
};

const pelicanItem: SxProps = {
  bgcolor: "secondary.main",
  width: "100%",

  margin: "0 auto",
  padding: "20px 40px",
  borderRadius: "20px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const pelicanLogo: CSSProperties = {
  width: "60%",
  height: "auto",
  objectFit: "contain",
};

const PartnerList = () => {
  return (
    <Box sx={grid}>
      <Box sx={itemContainer} gridArea="a">
        <Image
          style={logo}
          src="/images/logos/ncar_logo.png"
          alt="NCAR Logo"
          width={518 * 0.6}
          height={142 * 0.6}
        />
      </Box>
      <Box sx={itemContainer} gridArea="b">
        <Image
          style={logo}
          src="/images/logos/pism_logo.png"
          alt="PISM Logo"
          width={1000 * 0.28}
          height={332 * 0.28}
        />
      </Box>
      <Box sx={itemContainer} gridArea="c">
        <Image
          style={logo}
          src="/images/logos/fiu_logo.svg"
          alt="FIU Logo"
          width={221.7}
          height={102.8}
        />
      </Box>
      <Box sx={itemContainer} gridArea="d">
        <SonarAILogo />
      </Box>
      <Box sx={pelicanItem} gridArea="e">
        <Image
          style={pelicanLogo}
          src="/images/logos/pelican_logo.png"
          alt="Pelican Logo"
          width={600}
          height={213}
        />
      </Box>
    </Box>
  );
};

export default PartnerList;
