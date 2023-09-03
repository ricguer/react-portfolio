import './App.css';
import Header from "./components/Header";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>

  );
}

export default App;
