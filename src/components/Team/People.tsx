import { Box, SxProps } from "@mui/material";
import PersonCard from "./PersonCard";
import { Grid } from "@mui/system";

const container: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const pis = [
  {
    src: "/images/people/brian_bockelman.jpg",
    alt: "Headshot of Brian Bockelman",
    name: "Brian Bockelman",
    title: "Principal Investigator",
    project: "Pelican",
  },
  {
    src: "/images/people/doug_schuster.png",
    alt: "Headshot of Doug Schuster",
    name: "Doug Schuster",
    title: "Principal Investigator",
    project: "NCAR",
  },
  {
    src: "/images/people/andy_aschwanden.jpg",
    alt: "Headshot of Andy Aschwanden",
    name: "Andy Aschwanden",
    title: "Principal Investigator",
    project: "PISM",
  },
  {
    src: "/images/people/leonardo_bobadilla.png",
    alt: "Headshot of Leonardo Bobadilla",
    name: "Leonardo Bobadilla",
    title: "Principal Investigator",
    project: "EnviStor",
  },
  {
    src: "/images/people/carrie_bell.png",
    alt: "Headshot of Carrie Bell",
    name: "Carrie Bell",
    title: "Principal Investigator",
    project: "Sonar AI",
  },
];

const People = () => {
  return (
    <Box sx={container}>
      <Grid container justifyContent={"center"} spacing={2}>
        {pis
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((pi, i) => (
            <Grid
              key={i}
              size={{ xs: 6, sm: 4, md: 2, lg: 2 }}
              sx={{ display: "flex" }}
            >
              <PersonCard
                src={pi.src}
                alt={pi.alt}
                name={pi.name}
                title={pi.title}
                project={pi.project}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default People;
