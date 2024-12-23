import { Box, SxProps } from "@mui/material";
import { Grid } from "@mui/system";
import { CSSProperties } from "react";
import Balancer from "react-wrap-balancer";
import Graphic from "./Graphic";

const taglineContainer: SxProps = {
  width: "100%",
  minHeight: "450px",
  display: "flex",
  margin: {
    xs: "20px 0",
    md: "0",
  },

  position: "relative",
  // left: "-100px",

  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const text: SxProps = {
  padding: "0 20px",
};

const taglineText: CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
  fontWeight: 700,
};

const subtextContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const subtext: CSSProperties = {
  maxWidth: "800px",
  fontSize: "1.25rem",
  textAlign: "center",
};

const Tagline = () => {
  return (
    <Box sx={taglineContainer}>
      <Graphic />
      <Box sx={text}>
        <Grid container justifyContent={"center"} pb={1}>
          <Grid size={{ xs: 12, md: 10, lg: 8 }}>
            <span style={taglineText}>
              <Balancer>
                Advancing Earth Science and Innovating Data Access and Sharing
              </Balancer>
            </span>
          </Grid>
        </Grid>
        <Box sx={subtextContainer}>
          <span style={subtext}>
            A collaboration between 5 projects, working to innovate science-led
            pathways through the NSF cyberinfrastructure landscape.
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Tagline;
