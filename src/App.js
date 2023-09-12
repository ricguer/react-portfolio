import './App.css';
import React, { useState } from "react";
import { Paper, Stack } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import ParticlesBackground from './components/ParticlesBackground';
import Header from "./components/app-header/Header";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection from "./sections/PortfolioSection";
import Footer from "./components/Footer";
import GlobalTheme from "./GlobalTheme";


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = React.useMemo(() => GlobalTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ParticlesBackground />
        <div className="App">
          <Paper className="App-background-overlay" elevation={5} />
          <Stack className="App-main-stack">
            <Header colorModeContext={ColorModeContext} />
            <SkillsSection />
            <PortfolioSection />
            <Footer />
          </Stack>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default App;
