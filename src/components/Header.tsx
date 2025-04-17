import { Box, SxProps } from "@mui/material";
import Link from "next/link";

const headerStyle: SxProps = {
  width: "100%",
  height: "50px",
  bgcolor: "primary.main",
  boxShadow: 4,
};

const nameContainerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  height: "100%",
};

const nameStyle: SxProps = {
  fontSize: "24px",
  marginLeft: "10px",
  paddingX: "10px",
  fontWeight: 300,
};

const Header = () => {
  return (
    <Box component="header" sx={headerStyle}>
      <Box sx={nameContainerStyle}>
        <Link href="/">
          <Box sx={nameStyle}>Pathfinders</Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
