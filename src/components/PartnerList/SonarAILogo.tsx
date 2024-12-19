import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

const container: SxProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const name: CSSProperties = {
  display: "block",
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
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
  width: "33%",
  height: "auto",
  objectFit: "contain",
};

const SonarAILogo = () => {
  return (
    <Box sx={container}>
      <span style={name}>Sonar AI</span>
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
