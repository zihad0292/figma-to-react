// MUI components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import Layout
import Workspace from "./layouts/Workspace";

const theme = createTheme({
  palette: {
    white: {
      // Purple and green play nicely together.
      main: "#fff",
      contrastText: "#000",
    },
    custom2: {
      // This is green.A700 as hex.
      main: "#009688",
      contrastText: "#fff",
    },
    contrastThreshold: 4.5,
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

