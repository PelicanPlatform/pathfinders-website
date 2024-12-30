import Recent from "@/components/Recent";
import PartnerList from "@/components/PartnerList";
import Strategies from "@/components/Strategies";
import Tagline from "@/components/Tagline";
import Team from "@/components/Team";
import { Box, SxProps } from "@mui/material";

const mainContainer: SxProps = {
  padding: {
    lg: "0 25px 25px 25px",
    md: "0 15px 15px 15px",
    xs: "0 8px 8px 8px",
  },
};

const Home = () => {
  return (
    <div>
      <Tagline />
      <Box component="main" sx={mainContainer}>
        <Recent />
        <PartnerList />
        <Strategies />
        <Team />
      </Box>
    </div>
  );
};

export default Home;
