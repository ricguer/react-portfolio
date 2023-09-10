import './App.css';
import Header from "./components/Header";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./components/Footer";
import Particles from './components/Particles.js';
import { Paper } from '@mui/material';

function App() {
  return (
    <main className="App">
      <Paper elevation={0} style={{ position: "absolute", zIndex: "-1", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Particles />
        <Paper elevation={4} style={{ position: "absolute", zIndex: "-1", height: "100vh", width: "90vw" }}>
          <Header />
          <SkillsSection />
          <ProjectsSection />
          {/* <Footer /> */}
        </Paper>
      </Paper>
    </main>
  );
}

export default App;
