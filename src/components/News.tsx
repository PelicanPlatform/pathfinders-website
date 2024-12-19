import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

const newsLink =
  "https://pelicanplatform.org/user-stories/2024/06/13/noaa-on-the-ospool";
const newsImage =
  "https://raw.githubusercontent.com/CHTC/Articles/main/images/noaa-banner.png";

const wrapper: SxProps = {
  display: {
    md: "flex",
    sm: "block",
  },
  padding: "20px",
  gap: "10px",
};

const image: CSSProperties = {
  objectFit: "cover",
  aspectRatio: 2,
  width: "auto",
  maxWidth: "100%",
};

const text: CSSProperties = {
  // textAlign: "justify",
};

const News = () => {
  return (
    <Link href={newsLink} target="_blank">
      <Box sx={wrapper}>
        <Image
          style={image}
          src={newsImage}
          alt="News"
          width={420}
          height={210}
        />
        <Box>
          <h3>
            NOAA funded marine scientist uses OSPool access to high throughput
            computing to explode her boundaries of research
          </h3>
          <p style={text}>
            Dr. Carrie Wall, a research scientist at the University of Colorado
            Boulder, shares how access to OSPool resources has allowed her team
            to expand the scope of their research and to fail, unconstrained by
            the cost of computing in the cloud and the associated restraints
            that places on research.
          </p>
        </Box>
      </Box>
    </Link>
  );
};

export default News;
