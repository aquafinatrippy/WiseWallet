import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { History } from "./components/History";
import { AddTranscation } from "./components/AddTranscation";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

function App() {

  return (
    <ThemeProvider theme={theme} >
      <Header />
      <Balance />
      <History />
      <AddTranscation />
    </ThemeProvider>
  );
}

export default App;
