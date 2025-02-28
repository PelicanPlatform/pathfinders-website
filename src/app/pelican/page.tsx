import { getArticles } from "@/lib/articles";
import { Staff, StaffCard } from "@chtc/web-components";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
      <Box width="100%" display="flex" justifyContent="center">
        <Image
          width={500 / 1.5}
          height={178 / 1.5}
          src="/images/logos/pelican_full_logo.png"
          alt="Pelican Logo"
        />
      </Box>

      <Typography variant="h4" py="15px">
        Software Designed to Make Data Distribution Easy
      </Typography>

      <Box component="ul" pl="40px">
        {bullets.map((bullet, i) => (
          <li key={i} style={{ paddingBottom: "5px" }}>
            {bullet}
          </li>
        ))}
      </Box>

      <hr />

      <Typography variant="h4" pb="10px">
        Pelican in the News
      </Typography>

      <Box display="flex" flexWrap="wrap">
        {getArticles("pelican").map((article, i) => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            borderRadius="10px"
            bgcolor="primary.main"
            width="max-content"
            padding="10px"
            margin="10px"
            maxWidth="40%"
            key={i}
          >
            <Box
              component="p"
              fontWeight="bold"
              sx={{ textDecoration: "underline" }}
            >
              <Link href={article.link} target="_blank">
                {article.title}
              </Link>
            </Box>
            <Box width="100%" display="flex" justifyContent="space-between">
              <Box component="small" mr="20px">
                {article.author}
              </Box>
              <small>{article.date}</small>
            </Box>
          </Box>
        ))}
      </Box>

      <hr />

      <Typography variant="h4" pb="10px">
        Team
      </Typography>

      <TeamMembers />
    </main>
  );
};

const TeamMembers = async () => {
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

  const currentStaff = team
    .filter(
      (member) =>
        member.organizations.includes("pelican") && member.status !== "Past"
    )
    .sort((a, b) => (a.pelican?.weight ?? 0) - (b.pelican?.weight ?? 0));

  return (
    <Box pt={6}>
      <Container maxWidth={"xl"}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={6} lg={5}>
            <StaffCard type="leader" {...promoted[0]} />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          {promoted.slice(1, 3).map((member) => {
            return (
              <Grid key={member.name} item xs={12} sm={6} lg={5}>
                <StaffCard type="leader" {...member} />
              </Grid>
            );
          })}
        </Grid>
        <Grid container justifyContent={"center"}>
          {currentStaff.map((member) => (
            <StaffCard type="staff" key={member.name} {...member} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PelicanAboutPage;
