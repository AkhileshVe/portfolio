//import { motion } from "framer-motion";

const Home: React.FC = () => {
 return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-400">Akhilesh Verma</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg">
          React & React Native Developer with 3+ years of experience building
          scalable, high-performance web and mobile applications.
        </p>
        <p className="mt-4 text-gray-400">
          Passionate about clean UI, smooth UX, reusable components, and
          modern JavaScript ecosystems.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-gray-700 rounded-lg hover:border-blue-400 transition">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="h-80 w-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto shadow-2xl" />
      </div>
    </section>
  );
};

export default Home;
