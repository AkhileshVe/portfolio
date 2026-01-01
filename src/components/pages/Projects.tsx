import ProjectCard from "../ProjectCard";

const Projects: React.FC = () => {
 const projects = [
    {
      title: "Scheduling Calendar App",
      description:
        "Custom calendar UI with event ranges, smooth navigation, and optimized rendering.",
      tech: "React Native, JavaScript",
      github: "https://github.com/akhileshverma",
      demo: "#",
    },
    {
      title: "Web Dashboard",
      description:
        "Responsive admin dashboard with API integration and reusable components.",
      tech: "React.js, Tailwind CSS",
      github: "https://github.com/akhileshverma",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


