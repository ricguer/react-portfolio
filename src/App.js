import './App.css';
import React, { useState } from "react";
import { Paper } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Particles from './components/Particles';
import Header from "./components/header/Header";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./PortfolioSection";
import Footer from "./components/Footer";
import GlobalTheme from "./GlobalTheme";


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = useState("light");
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
        <Paper elevation={0} style={{ position: "absolute", zIndex: "-1", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Particles />
          <Paper elevation={5} style={{ zIndex: "-1", height: "100vh", width: "90vw" }}>
            <Header colorModeContext={ColorModeContext} />
            <main className="App">
              <SkillsSection />
              <ProjectsSection />
              {/* <Footer /> */}
            </main>
          </Paper>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default App;
