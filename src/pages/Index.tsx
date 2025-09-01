import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Zap, Shield, ArrowRight, Code, Rocket } from "lucide-react";
import { useUser, SignInButton } from "@clerk/clerk-react";

// Development mode - set to true to bypass Clerk authentication
const DEV_MODE = false;

const Index = () => {
  const { isSignedIn } = useUser();
  const isSignedInDev = DEV_MODE ? true : isSignedIn;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Simple Email API for{" "}
            <span className="text-primary">Launching Products</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Send transactional emails, verify domains, and track delivery logs.
            Perfect for startups and product launches.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {isSignedInDev ? (
              <Button size="lg" asChild>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <SignInButton mode="modal">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            )}
            <Button size="lg" variant="outline" asChild>
              <Link to="/api-docs">
                <Code className="mr-2 h-4 w-4" />
                View API Docs
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Simple API</h3>
                <p className="text-muted-foreground">
                  Send emails with a single API call. No complex setup required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Domain Verification</h3>
                <p className="text-muted-foreground">
                  Verify your domain for better deliverability and trust.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Logs</h3>
                <p className="text-muted-foreground">
                  Track all sent emails with detailed delivery logs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Coming Soon CTA */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">More Features Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're building exciting new features like email campaigns, analytics,
              and automation. Stay tuned for updates!
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/coming-soon">
                Explore Coming Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;