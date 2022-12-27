import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 920,
      lg: 1400,
      xl: 1700,
    },
  },
  palette: {
    primary: {
      main: "#f1faee",
    },
    secondary: {
      main: "#a8dadc",
    },
    error: {
      main: "#e63946",
    },
    warning: {
      main: "#ee9b00",
    },
  },
  typography: {
    fontFamily: "Interstate Light",

    button: {
      fontSize: "14px",
      fontWeight: "600",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
                @font-face {
                    font-family: "Interstate Light";
                    src: url(fonts/InterstateLight.ttf) format("truetype");
                }`,
    },
  },
});
