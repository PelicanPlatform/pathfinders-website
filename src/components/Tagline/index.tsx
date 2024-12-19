import { Box, SxProps } from "@mui/material";
import { CSSProperties } from "react";
import Graphic from "./Graphic";

const taglineContainer: SxProps = {
  width: "100%",
  height: "300px",
  display: "flex",
  position: "relative",

  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const taglineText: CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
};

const subtaglineText: CSSProperties = {
  fontSize: "1rem",
  textAlign: "center",
};

const Tagline = () => {
  return (
    <Box sx={taglineContainer}>
      <Graphic />
      <span style={taglineText}>
        Advancing Earth Science and Innovating Data Access and Sharing
      </span>
      <span style={subtaglineText}>
        A collaboration between 5 projects, working to innovate science-led
        pathways through the NSF cyberinfrastructure landscape, with the mission
        to to build exemplars using NDC-C-funded cyberinfrastructure for other
        earth science teams to follow.
      </span>
    </Box>
  );
};

export default Tagline;
