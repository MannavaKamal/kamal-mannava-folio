
const SkillTagsCloud = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "C", level: "Proficient" },
        { name: "Java", level: "Proficient" },
        { name: "Python", level: "Proficient" }
      ]
    },
    {
      category: "Stacks",
      skills: [
        { name: "MERN", level: "Proficient" },
        { name: "Python Full Stack", level: "Intermediate" },
        { name: "Java Full Stack", level: "Intermediate" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Proficient" },
        { name: "MongoDB", level: "Proficient" },
        { name: "OracleDB", level: "Intermediate" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "GitHub", level: "Proficient" }
      ]
    },
    {
      category: "APIs & Tools",
      skills: [
        { name: "REST", level: "Proficient" },
        { name: "Postman", level: "Proficient" },
        { name: "DSA", level: "Intermediate" },
        { name: "Networking", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    return level === "Proficient" 
      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
      : "bg-secondary text-secondary-foreground hover:bg-secondary/80";
  };

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I'm Good At 👨‍💻</h2>
          <p className="text-xl text-muted-foreground">Technologies and skills I work with</p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:animate-swing cursor-default ${getLevelColor(skill.level)}`}
                    title={skill.level}
                  >
                    {skill.name}
                    {/* Tooltip */}
                    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {skill.level}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTagsCloud;
