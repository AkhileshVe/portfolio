
const Skills: React.FC = () => {
  const skills = [
    "React.js",
    "React Native",
    "JavaScript (ES6+)",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "HTML & CSS",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10">Skills & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 text-center rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;