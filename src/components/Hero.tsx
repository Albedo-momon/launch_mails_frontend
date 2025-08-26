import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-feature-gradient opacity-30" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent border border-border mb-8 animate-fade-in-up">
            <span className="text-sm font-medium text-accent-foreground">
              🚀 New: Advanced Automation Features
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Email Marketing
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Send beautiful email campaigns, manage multiple projects, and grow your audience 
            with our powerful yet simple email marketing platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
            <Button size="lg" variant="hero" className="min-w-[200px]" asChild>
              <a href="/admin">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="min-w-[200px]">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong border border-border">
              <img
                src={heroDashboard}
                alt="MailFlow Dashboard Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-hero-gradient rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-15 animate-pulse delay-75" />
          </div>

          {/* Social Proof */}
          <div className="mt-16 animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by 10,000+ businesses worldwide
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-lg font-semibold">TechCorp</div>
              <div className="text-lg font-semibold">StartupXYZ</div>
              <div className="text-lg font-semibold">GrowthCo</div>
              <div className="text-lg font-semibold">ScaleUp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;