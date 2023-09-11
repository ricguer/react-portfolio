import './App.css';
import React, { useState } from "react";
import { Paper } from '@mui/material';
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
          <Paper elevation={5} className="App-content-container">
            <Header colorModeContext={ColorModeContext} />
            <main>
              <SkillsSection />
              <PortfolioSection />
            </main>
            <Footer />
          </Paper>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default App;
