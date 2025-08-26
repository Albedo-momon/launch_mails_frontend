import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content: "MailFlow transformed our email marketing. We've seen a 300% increase in engagement and our campaigns are now fully automated. The analytics are incredibly detailed.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder",
      company: "StartupLaunch",
      content: "The template library saved us weeks of design work. Our welcome series now converts 40% better than our previous solution. Customer support is outstanding!",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      role: "E-commerce Manager",
      company: "RetailPlus",
      content: "API integration was seamless. We connected our store in minutes and now automatically segment customers based on purchase behavior. Revenue from email increased 250%.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "David Park",
      role: "Growth Lead",
      company: "SaaS Solutions",
      content: "Multi-project management is a game-changer. We manage 5 different products from one dashboard. The scheduling features ensure perfect timing across time zones.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "Content Manager",
      company: "Creative Agency",
      content: "Domain setup was straightforward and deliverability improved immediately. Our emails actually reach the inbox now. The analytics help us optimize every campaign.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "GrowthCorp",
      content: "We switched from Mailchimp and couldn't be happier. Better features at a fraction of the cost. The user management tools are particularly impressive.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <section className="py-20 px-4" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by thousands of{" "}
            <span className="text-primary">businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our customers say about their experience with MailFlow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">50K+</p>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">2.5M+</p>
            <p className="text-muted-foreground">Emails Sent</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-muted-foreground">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-muted-foreground">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;