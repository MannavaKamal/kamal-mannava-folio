
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CallToActionBanner = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:2200032973cseh@gmail.com?subject=Let's Connect - Portfolio Inquiry";
  };

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">Let's Connect! 🚀</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Have an opportunity or idea? I'm just one message away in the room.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
              size="lg"
              onClick={handleEmailClick}
              className="group px-8 py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Mail className="h-5 w-5 mr-2 group-hover:animate-swing" />
              Email Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-foreground hover:text-background"
            >
              <a href="tel:+919666917545">
                <Phone className="h-5 w-5 mr-2" />
                Call Kamal
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Response time: Usually within 24 hours ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
