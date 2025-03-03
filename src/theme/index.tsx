import { createTheme, Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    background: {
      default: "#fe5000", // Sets the default background color
      paper: "#ffffff", // Background color for paper-like elements (optional)
    },
  },
});
export default theme;
