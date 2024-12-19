import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";
import AwardLink from "../AwardLink";
import SonarAILogo from "./SonarAILogo";
import Partner, { itemContainer, logo, nameAndAward } from "./Partner";

const grid: SxProps = {
  width: "100%",
  display: "grid",
  padding: "20px 0",

  gap: "30px",
  gridAutoColumns: "1fr",
  gridTemplateAreas: `
    "a a b b"
    "c c d d"
    "e e e e"
  `,
};

// pelican styles

const pelicanItem: SxProps = {
  ...itemContainer,
  bgcolor: "secondary.main",
  width: "100%",

  flexDirection: "row",
};

const pelicanLeft: SxProps = {
  maxWidth: "100%",
  marginRight: "20px",
  flexShrink: 0,
};

const pelicanLogo: CSSProperties = {
  ...logo,
  width: "200px",
  margin: "0 auto",
};

const pelicanRight = {
  display: "flex",
  flexGrow: 1,

  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const PartnerList = () => {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
  non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
  ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa,
  varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
  molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.`;

  return (
    <Box sx={grid}>
      <Partner
        area="a"
        src="/images/logos/ncar_logo.png"
        alt="NCAR Logo"
        name="NCAR"
        width={518 * 0.6}
        height={142 * 0.6}
        awardId="1852977"
        text={loremIpsum}
      />
      <Partner
        area="b"
        src="/images/logos/pism_logo.png"
        alt="PISM Logo"
        name="PISM"
        width={1000 * 0.28}
        height={332 * 0.28}
        awardId="2324718"
        text={loremIpsum}
      />
      <Partner
        area="c"
        src="/images/logos/fiu_logo.svg"
        alt="FIU Logo"
        name="EnviStor"
        width={221.7}
        height={102.8}
        awardId="2322308"
        text={loremIpsum}
      />
      <Partner
        area="d"
        name="Sonar AI"
        awardId="2311843"
        text={loremIpsum}
        image={<SonarAILogo />}
      />

      <Box sx={pelicanItem} gridArea="e">
        <Box sx={pelicanLeft}>
          <Image
            style={pelicanLogo}
            src="/images/logos/pelican_logo.png"
            alt="Pelican Logo"
            width={400}
            height={395}
          />
        </Box>
        <Box sx={pelicanRight}>
          <span style={nameAndAward}>
            Pelican &mdash; <AwardLink id="2324718" />
          </span>
          <p>{loremIpsum}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerList;
