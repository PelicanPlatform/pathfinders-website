import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import {
  getLastMeeting,
  getLastMeetingNotes,
  getNextMeeting,
} from "./meetings";

const MEETING_INFO = {
  lastMeeting: getLastMeeting(),
  nextMeeting: getNextMeeting(),
  meetingNotesLink: getLastMeetingNotes(),
};

const NEWS_ARTICLE = {
  link: "https://pelicanplatform.org/user-stories/2024/06/13/noaa-on-the-ospool",
  image:
    "https://raw.githubusercontent.com/CHTC/Articles/main/images/noaa-banner.png",
  imageWidth: 420,
  imageHeight: 210,
  title:
    "NOAA funded marine scientist uses OSPool access to high throughput computing to explode her boundaries of research",
  excerpt:
    "Dr. Carrie Wall, a research scientist at the University of Colorado Boulder, shares how access to OSPool resources has allowed her team to expand the scope of their research and to fail, unconstrained by the cost of computing in the cloud and the associated restraints that places on research.",
};

const wrapper: SxProps = {
  display: {
    xs: "block",
    md: "flex",
  },
  padding: "0 20px 20px 20px",
  gap: "10px",
};

const imageWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: {
    xs: "100%",
    md: "300px",
  },
  maxWidth: "420px",
  flexShrink: 0,
  margin: "0 auto",
  marginBottom: {
    xs: "20px",
    md: 0,
  },
};

const image: CSSProperties = {
  objectFit: "cover",
  aspectRatio: 2,
  width: "100%",
  height: "auto",
};

const meetingContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  flexShrink: 0,
  textAlign: "center",

  bgcolor: "primary.main",
  borderRadius: "10px",
  padding: "10px",
  width: {
    xs: "300px",
    md: "150px",
  },
  maxWidth: "100%",
  margin: "0 auto",
  height: "fit-content",
};

const lastMeetingLink: SxProps = {
  display: "block",
  fontStyle: "italic",
  textDecoration: "underline",
};

const News = () => {
  return (
    <Box sx={wrapper}>
      <Box sx={imageWrapper}>
        <Link href={NEWS_ARTICLE.link} target="_blank">
          <Image
            style={image}
            src={NEWS_ARTICLE.image}
            alt="News"
            width={NEWS_ARTICLE.imageWidth}
            height={NEWS_ARTICLE.imageHeight}
          />
        </Link>
      </Box>

      <Box>
        <h3>
          <Link href={NEWS_ARTICLE.link} target="_blank">
            {NEWS_ARTICLE.title}
          </Link>
        </h3>
        <p>{NEWS_ARTICLE.excerpt}</p>
      </Box>

      <Box sx={meetingContainer}>
        <Box>
          <h4>Last Meeting</h4>
          <span style={{ display: "block" }}>{MEETING_INFO.lastMeeting}</span>
          {MEETING_INFO.meetingNotesLink === "" ? (
            <></>
          ) : (
            <Box sx={lastMeetingLink}>
              <Link href={MEETING_INFO.meetingNotesLink} target="_blank">
                Meeting Notes
              </Link>
            </Box>
          )}
        </Box>

        <Box>
          <h4>Next Meeting</h4>
          <span style={{ display: "block" }}>{MEETING_INFO.nextMeeting}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
