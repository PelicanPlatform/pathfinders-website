"use client";

import {
  createTheme,
  responsiveFontSizes,
  Shadows,
  ThemeProvider,
} from "@mui/material";
import { FC } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "600"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    primary: {
      main: "#cfe4ff",
    },
    secondary: {
      main: "#5fafff",
    },
  },
  typography: {
    h1: {
      fontFamily: poppins.style.fontFamily,
    },
    h2: {
      fontFamily: poppins.style.fontFamily,
    },
    h3: {
      fontFamily: poppins.style.fontFamily,
    },
    h4: {
      fontFamily: poppins.style.fontFamily,
    },
    h5: {
      fontFamily: poppins.style.fontFamily,
    },
    h6: {
      fontFamily: poppins.style.fontFamily,
    },
    body1: {
      fontSize: "1rem",
      paddingBottom: "1rem",
    },
    fontFamily: [
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "Lucida Grande",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiContainer: {
      defaultProps: {},
    },
  },
  shadows: [
    "none",
    "0px 0px 25px #acbee7",
    "0px 0px 50px #acbee7",
    "0px 0px 75px #acbee7",
    "0px 0px 100px #acbee7",
  ].concat(Array(20).fill("none")) as Shadows,
});

theme = responsiveFontSizes(theme, { factor: 3 });

interface ThemeProviderClientProps {
  children: React.ReactNode;
}

export const ThemeProviderClient: FC<ThemeProviderClientProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
