import About from "../components/About";
import Intro from "../components/Intro";
import Navbar from "../components/navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
