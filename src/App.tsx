import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import { Toaster } from "react-hot-toast";
import Skills from "./components/pages/Skills";

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Toaster position="top-right" />
      <Navbar />
      <Home />
      <Skills />
      <About />
            <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
