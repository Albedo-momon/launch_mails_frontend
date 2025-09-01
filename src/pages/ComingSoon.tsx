import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Mail,
    BarChart3,
    Zap,
    Globe,
    Shield,
    Users,
    Bell,
    Rocket,
    CheckCircle,
    Star
} from "lucide-react";

const ComingSoon = () => {
    const features = [
        {
            icon: <Mail className="h-8 w-8" />,
            title: "Email Campaigns",
            description: "Create and manage email marketing campaigns with beautiful templates and automation.",
            status: "Coming Soon"
        },
        {
            icon: <BarChart3 className="h-8 w-8" />,
            title: "Analytics Dashboard",
            description: "Track email performance with detailed analytics, open rates, and click-through rates.",
            status: "In Development"
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Email Automation",
            description: "Set up automated email sequences based on user behavior and triggers.",
            status: "Planned"
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Multi-Domain Support",
            description: "Manage multiple sending domains with individual verification and settings.",
            status: "Coming Soon"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Advanced Security",
            description: "Enhanced security features including SPF, DKIM, and DMARC configuration.",
            status: "In Development"
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Team Collaboration",
            description: "Invite team members, manage permissions, and collaborate on email campaigns.",
            status: "Planned"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <Rocket className="h-12 w-12 text-primary mr-3" />
                        <h1 className="text-5xl font-bold">Exciting Features Coming Soon</h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        We're building something powerful for developers and businesses.
                        Stay tuned for amazing new features that will revolutionize how you handle email communication.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Currently in active development</span>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                                            <span className={`text-xs px-2 py-1 rounded-full ${feature.status === 'Coming Soon'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : feature.status === 'In Development'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {feature.status}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Timeline */}
                <Card className="mb-16">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Development Timeline</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold">Q4 2024 - Core Features</h3>
                                    <p className="text-muted-foreground">Email sending, domain verification, and basic analytics</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold">Q1 2025 - Campaign Management</h3>
                                    <p className="text-muted-foreground">Email campaigns, templates, and automation workflows</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold">Q2 2025 - Advanced Analytics</h3>
                                    <p className="text-muted-foreground">Detailed reporting, A/B testing, and performance insights</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold">Q3 2025 - Team Features</h3>
                                    <p className="text-muted-foreground">Collaboration tools, user management, and enterprise features</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Notify Me Section */}
                <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
                    <CardContent className="p-12 text-center">
                        <div className="flex items-center justify-center mb-6">
                            <Bell className="h-12 w-12 text-primary mr-3" />
                            <h2 className="text-3xl font-bold">Stay Updated</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Be the first to know when these exciting features are released.
                            Get early access and exclusive updates delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                placeholder="Enter your email address"
                                className="flex-1"
                                type="email"
                            />
                            <Button size="lg" className="group">
                                <Bell className="mr-2 h-4 w-4" />
                                Notify Me
                                <Star className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </CardContent>
                </Card>

                {/* Current Features */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-8">What's Available Now</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Email API</h3>
                                <p className="text-muted-foreground">
                                    Send transactional emails with our simple REST API
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Domain Verification</h3>
                                <p className="text-muted-foreground">
                                    Verify your domains for better email deliverability
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Email Logs</h3>
                                <p className="text-muted-foreground">
                                    Track all your sent emails with detailed delivery logs
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
