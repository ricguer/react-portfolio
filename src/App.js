                                                                /* ===================== IMPORTS ====================== */
import './App.css';
import React from "react";
import { Stack, createTheme } from '@mui/material';
import ParticlesBackground from './components/ParticlesBackground';

                                                                /* -------------------- COMPONENTS -------------------- */
import Navigation from "./components/Navigation";
import Header from "./components/app-header/Header";
import AboutMeSection from './components/sections/AboutMeSection';
import PortfolioSection from "./components/sections/PortfolioSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

                                                                /* ---------------------- THEMES ---------------------- */
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { ColorContext } from "./ColorContext";


                                                                /* ====================== APP ========================= */
function App() {
  const [mode, setMode] = React.useState("dark");               /* State of application theme                           */

                                                                /* Theme toggle function                                */
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

                                                                /* Theme creation                                       */
  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ParticlesBackground />
        <div className="App">
          <Stack className="App-main-stack" spacing={5}>
            <Navigation />
            <Header className="App-header" />
            <div style={{ paddingTop: "64px" }}>
              <AboutMeSection />
              <PortfolioSection />
              <ResumeSection />
              <ContactSection />
            </div>
            <Footer />
          </Stack>
        </div>
      </ThemeProvider>
    </ColorContext.Provider>
  )
};

export default App;
