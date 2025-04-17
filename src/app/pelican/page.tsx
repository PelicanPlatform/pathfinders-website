import { Staff, StaffCard } from "@chtc/web-components";
import {
  Box,
  Divider,
  Grid2 as Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import pelicanArticles from "@/lib/articles/pelican.json";
import pelicanTeam from "@/lib/team/pelican.json";

const PelicanAboutPage = () => {
  const bullets = [
    `The Pelican Platform is designed to meet the needs of data providers and consumers in the age of “Big Data.”`,
    `Its mission is to provide a platform that makes deploying data easy and accessing this data easier via well documented APIs and client tools.`,
    `Pelican facilitates the ability for researchers to access and transfer data from where it is stored to where it needs to run.`,
    `Pelican works to efficiently transfer open data to researchers who require it. Pelican provides an open-source software platform for federating dataset repositories together and delivering the objects to computing capacity such as the OSPool.`,
  ];

  return (
    <main>
      <Box flexDirection="column" display="flex" alignItems="center">
        <Box my="20px">
          <Image
            width={500}
            height={178}
            src="/images/logos/pelican_full_logo.png"
            alt="Pelican Logo"
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="h4">
            Software Designed to Make Data Distribution Easy
          </Typography>
          <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {bullets.map((bullet, i) => (
              <ListItem
                key={i}
                sx={{ maxWidth: "100ch", display: "list-item" }}
              >
                {bullet}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Divider sx={{ width: "100%" }} />

      <Typography variant="h4" pt="20px" pb="10px">
        Pelican in the News
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {pelicanArticles.map((article, i) => (
          <Grid
            key={i}
            size={{ xs: 12, sm: 6 }}
            height="1fr"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "10px",
              bgcolor: "primary.light",
              padding: "10px",
            }}
          >
            <Box
              component="p"
              fontWeight="bold"
              mb="10px"
              sx={{ textDecoration: "underline" }}
            >
              <Link href={article.link} target="_blank">
                {article.title}
              </Link>
            </Box>
            <Box width="100%" display="flex" justifyContent="space-between">
              <Box component="small" mr={"20px"}>
                {article.author}
              </Box>
              <small>{article.date}</small>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mt: "20px", width: "100%" }} />

      <Typography variant="h4" pt="20px" pb="10px">
        Team
      </Typography>

      <TeamMembers />
    </main>
  );
};

const TeamMembers = () => {
  // have to cast here because the "status" field is a string not a union
  const team = pelicanTeam as Staff[];

  const promoted = team
    .filter(
      (member) =>
        member?.promoted == true &&
        member.organizations.includes("pelican") &&
        member.status !== "Past"
    )
    .sort((a, b) => (a.pelican?.weight ?? 0) - (b.pelican?.weight ?? 0));

  // filter out past members, those not in pelican, and those who are promoted (as they are already displayed)
  // also sort by weight
  const currentStaff = team
    .filter(
      (member) =>
        member.organizations.includes("pelican") &&
        member.status !== "Past" &&
        !member.promoted
    )
    .sort((a, b) => (a.pelican?.weight ?? 0) - (b.pelican?.weight ?? 0));

  return (
    <Box pt={3}>
      <Grid container justifyContent="center">
        <Grid size={{ xs: 12, sm: 6 }}>
          <StaffCard type="leader" {...promoted[0]} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        {promoted.slice(1, 3).map((member) => {
          return (
            <Grid key={member.name} size={{ xs: 12, sm: 6 }}>
              <StaffCard type="leader" {...member} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {currentStaff.map((member) => (
          <Grid key={member.name} size={{ xs: 12, md: 6 }}>
            <StaffCard type="staff" {...member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PelicanAboutPage;
