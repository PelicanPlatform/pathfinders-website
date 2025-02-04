import { Box, SxProps } from "@mui/material";
import Partner from "./Partner";
import SonarAILogo from "./SonarAILogo";

const grid: SxProps = {
  width: "100%",
  display: "grid",
  padding: "20px 0",

  gap: "30px",
  gridAutoColumns: "1fr",
  gridAutoRows: "1fr",
  gridTemplateAreas: {
    xs: `
      "a b"
      "c d"
      "e e"
    `,
    md: `
      "a a a b b b c c c d d d"
      ". . . . e e e e . . . ."
    `,
  },
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
        width={518}
        height={142}
        awardId="1852977"
        text={loremIpsum}
      />
      <Partner
        area="b"
        src="/images/logos/pism_logo.png"
        alt="PISM Logo"
        name="PISM"
        nameLink="https://www.pism.io/"
        width={1000 * 0.5}
        height={332 * 0.5}
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
      <Partner
        area="e"
        src="/images/logos/pelican_full_logo.png"
        alt="Pelican Logo"
        name="Pelican"
        width={500}
        height={178}
        awardId="2324718"
        text={loremIpsum}
        containerStyles={{
          bgcolor: "secondary.main",
        }}
      />
    </Box>
  );
};

export default PartnerList;
