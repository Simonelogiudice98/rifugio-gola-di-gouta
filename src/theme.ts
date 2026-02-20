import { createTheme } from "@mui/material/styles";

const brand = {
  teal: "#184A56",
  sand: "#EAE4DB",
  aqua: "#57A09E",
  paper: "#F3EEE7", // un filo più chiaro del beige per distinguere le card
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: brand.teal, contrastText: brand.sand },
    secondary: { main: brand.aqua, contrastText: "#0A0C10" },

    background: {
      default: brand.sand, // beige come sfondo pagina
      paper: brand.paper,  // card/dialog leggermente diversi
    },

    text: {
      primary: brand.teal,
      secondary: "rgba(24, 74, 86, 0.75)",
    },

    divider: "rgba(24, 74, 86, 0.18)",
  },

  shape: { borderRadius: 14 },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brand.sand,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: brand.teal,
          color: brand.sand,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none", // evita “shine” di default su alcuni browser
          border: "1px solid rgba(24, 74, 86, 0.14)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 14 },
        containedPrimary: {
          backgroundColor: brand.teal,
          color: brand.sand,
        },
        outlinedPrimary: {
          borderColor: "rgba(24, 74, 86, 0.45)",
          color: brand.teal,
        },
      },
    },
  },
});