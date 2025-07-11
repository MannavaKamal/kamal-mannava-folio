
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const BadgeList = () => {
  const certifications = [
    "Java SE 11 – Oracle Certified",
    "Red Hat Certified Enterprise Application Developer",
    "AWS Certified Cloud Practitioner"
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground">Official credentials that back my skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold leading-tight">
                  {cert}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgeList;
