interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, description, tech, github, demo
}) => (
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg transition">
    <h3 className="text-2xl font-semibold text-indigo-300">{title}</h3>
    <p className="text-gray-300 mt-2">{description}</p>
    <p className="text-sm text-gray-400 mt-3">{tech}</p>
    <div className="mt-5 flex gap-4">
      <a href={github} className="text-indigo-400 hover:underline">GitHub</a>
      {demo && <a href={demo} className="text-indigo-400 hover:underline">Live</a>}
    </div>
  </div>
);

export default ProjectCard;
