import './App.css';
import Header from "./components/Header";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./components/Footer";
import Particles from './components/Particles.js';

function App() {
  return (
    <main className="App">
      <Particles />
      <Header />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>

  );
}

export default App;
