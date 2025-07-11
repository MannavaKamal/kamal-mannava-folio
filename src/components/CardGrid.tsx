
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const CardGrid = () => {
  const projects = [
    {
      title: "Hotel Booking and Management System",
      description: "Dynamic hotel room booking web application with Hotel Manager & User modules, featuring middleware logic and comprehensive DB schema design.",
      techStack: ["HTML", "CSS", "Django", "MySQL"],
      github: "#",
      demo: null,
      status: "Completed"
    },
    {
      title: "ExploreEase",
      description: "Comprehensive tour planning and hotel booking platform with Admin, Hotel Manager, and Tourist roles, integrated with Razorpay payment gateway.",
      techStack: ["React.js", "Spring Boot", "MySQL"],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "TeloHaus",
      description: "Remote appliance control system via web application with real-time hardware/server integration and comprehensive device management dashboard.",
      techStack: ["React Native", "Node.js", "MongoDB"],
      github: "#",
      demo: null,
      status: "Ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Ongoing" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800";
  };

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground">Some things I've built</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 border-0 shadow-lg glassmorphism hover:animate-glow bg-white"
            >
              <div className="space-y-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-foreground hover:text-background transition-all"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-transform"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
