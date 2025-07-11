
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const TimelineSection = () => {
  const educationData = [
    {
      institution: "KL University",
      degree: "B.Tech in Computer Science Engineering",
      duration: "Aug 2022 – Apr 2026",
      score: "9.14 / 10",
      type: "GPA"
    },
    {
      institution: "Lakshyaa Junior College",
      degree: "Intermediate",
      duration: "Jun 2020 – Apr 2022",
      score: "830 / 1000",
      type: "Score"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30 hidden md:block"></div>

          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className="flex-1 max-w-md">
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group border-0 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-xl font-semibold">{edu.institution}</h3>
                        <p className="text-muted-foreground">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.duration}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">{edu.type}:</span>
                          <span className="text-lg font-bold text-primary">{edu.score}</span>
                          {edu.type === "GPA" && (
                            <span className="text-xs text-muted-foreground" title="Based on 10-point scale">
                              ⓘ
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1 max-w-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
