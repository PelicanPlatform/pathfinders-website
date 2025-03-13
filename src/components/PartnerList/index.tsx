import { Box, SxProps } from "@mui/material";
import Partner from "./Partner";
import SonarAILogo from "./SonarAILogo";

const grid: SxProps = {
  width: "100%",
  display: "grid",
  padding: "20px 0",

  gap: "30px",
  gridAutoColumns: "1fr",
  gridTemplateAreas: {
    xs: `
      "a b"
      "c d"
      "e e"
    `,
    md: `
      "a a b b c c d d"
      ". . e e e e . ."
    `,
  },
};

const PartnerList = () => {
  return (
    <Box sx={grid}>
      <Partner
        area="a"
        src="/images/logos/ncar_logo.png"
        alt="NCAR Logo"
        name="NCAR"
        width={518}
        height={142}
        awardId="1852977"
        aboutLink="https://ncar.ucar.edu/"
      />
      <Partner
        area="b"
        src="/images/logos/pism_logo.png"
        alt="PISM Logo"
        name="PISM"
        width={1000 * 0.5}
        height={332 * 0.5}
        awardId="2324718"
        aboutLink="https://www.pism.io/"
      />
      <Partner
        area="c"
        src="/images/logos/fiu_logo.svg"
        alt="FIU Logo"
        name="EnviStor"
        width={221.7}
        height={102.8}
        awardId="2322308"
        aboutLink="https://environment.fiu.edu/"
      />
      <Partner
        area="d"
        name="Sonar AI"
        awardId="2311843"
        image={<SonarAILogo />}
        aboutLink="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2311843"
      />
      <Partner
        area="e"
        src="/images/logos/pelican_logo.png"
        alt="Pelican Logo"
        width={400 / 2}
        height={395 / 2}
        name="Pelican"
        awardId="2331480"
        containerSx={{
          display: "flex",
          bgcolor: "secondary.main",
          flexDirection: "row",
          alignItems: "center",
        }}
        aboutLink="/pelican"
      />
    </Box>
  );
};

export default PartnerList;
