import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { History } from "./components/History";
import { AddTranscation } from "./components/AddTranscation";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Header />
        <Balance />
        <History />
        <AddTranscation />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
