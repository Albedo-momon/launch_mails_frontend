import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Send, 
  FolderTree, 
  Users, 
  Calendar, 
  Zap, 
  BarChart3,
  Palette,
  Shield
} from "lucide-react";
import emailFeatures from "@/assets/email-features.jpg";

const Features = () => {
  const features = [
    {
      icon: <Send className="h-6 w-6" />,
      title: "Mass Email Campaigns",
      description: "Send beautiful, responsive emails to thousands of subscribers with one click."
    },
    {
      icon: <FolderTree className="h-6 w-6" />,
      title: "Multiple Projects",
      description: "Organize campaigns by website or business. Keep everything perfectly separated."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smart List Management",
      description: "Segment your audience with custom lists: Beta users, Newsletter subscribers, and more."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Campaign Scheduling",
      description: "Schedule your campaigns for optimal delivery times across different time zones."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "API Integration",
      description: "Seamlessly integrate with your website. Auto-add users when they sign up or take actions."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Track open rates, click-through rates, and conversions with comprehensive reporting."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Template Editor",
      description: "Create stunning emails with our drag-and-drop editor and professional templates."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Deliverability Focus",
      description: "High inbox delivery rates with built-in spam testing and authentication setup."
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              grow your business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple newsletters to complex automation workflows, MailFlow has all the tools 
            you need to engage your audience and drive results.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Professional Email Marketing, Simplified
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Create, send, and track email campaigns that convert. Our intuitive platform 
              makes it easy to design beautiful emails, segment your audience, and measure success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground">Drag-and-drop email builder</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground">Advanced audience segmentation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground">Real-time performance analytics</span>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Start Building Campaigns
            </Button>
          </div>
          
          <div className="relative">
            <img
              src={emailFeatures}
              alt="Email Marketing Features"
              className="w-full h-auto rounded-2xl shadow-medium"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 text-accent-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;