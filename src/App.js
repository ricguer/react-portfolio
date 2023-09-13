import './App.css';
import React, { useRef, useState } from "react";
import { Stack } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import ParticlesBackground from './components/ParticlesBackground';
import Header from "./components/app-header/Header";
import PortfolioSection from "./sections/PortfolioSection";
import ResumeSection from "./sections/ResumeSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import GlobalTheme from "./GlobalTheme";
import AboutMeSection from './sections/AboutMeSection';


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
          <Stack className="App-main-stack" spacing={5}>
            <Header className="App-header" colorModeContext={ColorModeContext} />
            <div style={{ paddingTop: "64px" }}>
              <AboutMeSection />
              <PortfolioSection />
              <ResumeSection />
              <ContactSection />
              <Footer />
            </div>
          </Stack>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default App;
