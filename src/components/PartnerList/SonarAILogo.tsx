import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const container: SxProps = {
  width: "400px",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
};

const logosContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  flexGrow: 1,

  gridTemplateAreas: `
    "a a b b"
    ". c c ."
  `,
};

const logo: CSSProperties = {
  width: "25%",
  height: "auto",
  objectFit: "contain",
};

const SonarAILogo = () => {
  return (
    <Box sx={container}>
      <Box sx={logosContainer}>
        <Image
          style={{ ...logo, gridTemplate: "a" }}
          src="/images/logos/cu_logo.png"
          alt="CU Logo"
          width={192 * 0.4}
          height={184 * 0.4}
        />
        <Image
          style={{ ...logo, gridTemplate: "b" }}
          src="/images/logos/cires_logo.png"
          alt="CIRES Logo"
          width={300 * 0.35}
          height={150 * 0.35}
        />
        <Image
          style={{ ...logo, gridTemplate: "c" }}
          src="/images/logos/noaa_logo.png"
          alt="NOAA Logo"
          width={468 * 0.1}
          height={469 * 0.1}
        />
      </Box>
    </Box>
  );
};

export default SonarAILogo;
