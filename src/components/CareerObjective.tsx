
import { Card } from "@/components/ui/card";

const CareerObjective = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Career Objective</h2>
        </div>
        
        <Card className="p-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50">
          <blockquote className="text-lg md:text-xl leading-relaxed text-center font-light italic text-muted-foreground">
            "To secure a challenging position in a dynamic organization where I can leverage my specialization in Cloud Computing, strong networking skills, and expertise as a Full Stack Developer to design and implement innovative, scalable, and secure technology solutions that drive business success and personal growth."
          </blockquote>
        </Card>
      </div>
    </section>
  );
};

export default CareerObjective;
