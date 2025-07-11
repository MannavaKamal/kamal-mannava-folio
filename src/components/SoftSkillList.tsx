
import { MessageCircle, Users, Crown, Lightbulb } from "lucide-react";

const SoftSkillList = () => {
  const softSkills = [
    { name: "Communication", icon: MessageCircle, emoji: "💬" },
    { name: "Teamwork", icon: Users, emoji: "🤝" },
    { name: "Leadership", icon: Crown, emoji: "👑" },
    { name: "Problem-Solving", icon: Lightbulb, emoji: "💡" }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Soft Skills</h2>
          <p className="text-xl text-muted-foreground">Personal qualities that drive success</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="group text-center p-8 hover:scale-110 transition-all duration-300 hover:animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">
                  {skill.emoji}
                </div>
                <skill.icon className="h-8 w-8 mx-auto text-primary group-hover:text-primary/80 transition-colors" />
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillList;
