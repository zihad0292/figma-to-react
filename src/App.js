// MUI components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import Layout
import Workspace from "./layouts/Workspace";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif", // Use the same font family name specified in the Google Fonts link tag
    fontSize: 12,
  },
  palette: {
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    textMain: {
      main: "#4D4F5C",
    },
    textLight: {
      main: "#838296",
    },
    textDark: {
      main: "#4D4D4D",
    },
    orange: {
      main: "#FFBF3C",
      contrastText: "#000",
    },
    contrastThreshold: 4.5,
    // 61BD63 - green color
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Workspace />
    </ThemeProvider>
  );
}

export default App;

