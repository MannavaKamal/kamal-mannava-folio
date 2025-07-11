
import HeroSection from "@/components/HeroSection";
import CareerObjective from "@/components/CareerObjective";
import TimelineSection from "@/components/TimelineSection";
import CardGrid from "@/components/CardGrid";
import SkillTagsCloud from "@/components/SkillTagsCloud";
import BadgeList from "@/components/BadgeList";
import SoftSkillList from "@/components/SoftSkillList";
import CallToActionBanner from "@/components/CallToActionBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CareerObjective />
      <TimelineSection />
      <CardGrid />
      <SkillTagsCloud />
      <BadgeList />
      <SoftSkillList />
      <CallToActionBanner />
      
      {/* Footer */}
      <footer className="py-12 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          © 2024 Kamal Mannava. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
