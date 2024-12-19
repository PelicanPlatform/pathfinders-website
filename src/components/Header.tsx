import { Box, SxProps } from "@mui/material";

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
  marginLeft: "20px",
  fontWeight: 300,
};

const Header = () => {
  return (
    <Box component="header" sx={headerStyle}>
      <Box sx={nameContainerStyle}>
        <Box component="span" sx={nameStyle}>
          Pathfinders
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
