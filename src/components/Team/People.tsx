import { Box, SxProps } from "@mui/material";
import PersonCard from "./PersonCard";

const container: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const People = () => {
  return (
    <Box sx={container}>
      <PersonCard
        src="/images/people/brian_bockelman.jpg"
        alt="Headshot of Brian Bockelman"
        width={200}
        height={200}
        name="Brian Bockelman"
        title="Principal Investigator"
        project="Pelican"
      />
      <PersonCard
        src="/images/people/everette_joseph.jpg"
        alt="Headshot of Everette Joseph"
        width={200}
        height={200}
        name="Everette Joseph"
        title="Principal Investigator"
        project="NCAR"
      />
      <PersonCard
        src="/images/people/andy_aschwanden.jpg"
        alt="Headshot of Andy Aschwanden"
        width={200}
        height={200}
        name="Andy Aschwanden"
        title="Principal Investigator"
        project="PISM"
      />
      <PersonCard
        src="/images/people/leonardo_bobadilla.png"
        alt="Headshot of Leonardo Bobadilla"
        width={200}
        height={200}
        name="Leonardo Bobadilla"
        title="Principal Investigator"
        project="EnviStor"
      />
      <PersonCard
        src="/images/people/carrie_bell.png"
        alt="Headshot of Carrie Bell"
        width={200}
        height={200}
        name="Carrie Bell"
        title="Principal Investigator"
        project="Sonar AI"
      />
    </Box>
  );
};

export default People;
