import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      price: isAnnual ? 19 : 29,
      originalPrice: isAnnual ? 29 : null,
      contacts: "Up to 2,500 contacts",
      emails: "10,000 emails/month",
      features: [
        "Email campaigns",
        "Basic templates",
        "Email support",
        "Basic analytics",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Best for growing businesses",
      price: isAnnual ? 49 : 69,
      originalPrice: isAnnual ? 69 : null,
      contacts: "Up to 25,000 contacts",
      emails: "100,000 emails/month",
      features: [
        "Everything in Starter",
        "Advanced templates",
        "A/B testing",
        "Advanced analytics",
        "API integration",
        "Priority support",
        "5 user accounts",
        "Custom domains"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: isAnnual ? 149 : 199,
      originalPrice: isAnnual ? 199 : null,
      contacts: "Unlimited contacts",
      emails: "Unlimited emails",
      features: [
        "Everything in Professional",
        "White-label solution",
        "Dedicated IP",
        "Advanced automation",
        "Custom integrations",
        "Dedicated support",
        "Unlimited users",
        "SLA guarantee",
        "SAML SSO"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const features = [
    "Drag & drop email builder",
    "Mobile-responsive templates",
    "Contact management",
    "Automated campaigns",
    "Real-time analytics",
    "List segmentation",
    "Signup forms",
    "Landing pages",
    "Social media integration",
    "E-commerce integration"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, transparent{" "}
              <span className="text-primary">pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business. Start with a free trial, 
              no credit card required.
            </p>
            
            {/* Annual/Monthly Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <Label htmlFor="billing-toggle" className="text-sm">Monthly</Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label htmlFor="billing-toggle" className="text-sm">
                Annual
                <Badge variant="secondary" className="ml-2">Save 30%</Badge>
              </Label>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative border-border shadow-soft ${
                    plan.popular ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="default" className="px-4 py-1">
                        <Star className="mr-1 h-3 w-3 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                    
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground ml-1">/month</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="flex items-center justify-center mt-1">
                          <span className="text-sm text-muted-foreground line-through">
                            ${plan.originalPrice}/month
                          </span>
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground mt-2">
                        {plan.contacts} • {plan.emails}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 px-4 bg-secondary/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Everything you need to succeed</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All plans include these essential features to help you create, 
                send, and track professional email campaigns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. 
                  Changes take effect immediately, and we'll prorate the billing.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  All plans come with a 14-day free trial. No credit card required 
                  to get started.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and for Enterprise plans, 
                  we can arrange bank transfers.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee for all paid plans. 
                  Contact support for assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust MailFlow for their email marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;