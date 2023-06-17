// MUI components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import Layout
import WorkSpaceLayout from "./layouts/WorkSpaceLayout";

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
    iconWhite: {
      main: "#fff",
    },
    iconGreen: {
      main: "#61BD63",
    },
    orange: {
      main: "#FFBF3C",
      contrastText: "#000",
    },
    buttonDark: {
      main: "#53575A",
      contrastText: "#fff",
    },
    contrastThreshold: 4.5,
    // 61BD63 - green color
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: "#53575A",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WorkSpaceLayout />
    </ThemeProvider>
  );
}

export default App;

