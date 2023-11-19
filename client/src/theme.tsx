// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Add your global button styles here
        root: {
          borderRadius: 8,
          textTransform: "none", // Set text to lowercase
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Add your global button styles here
        root: {
          color: "white",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

export default theme;
