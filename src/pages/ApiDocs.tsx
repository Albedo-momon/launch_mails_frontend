import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Code,
    Copy,
    Mail,
    Globe,
    FileText,
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Users,
    Star
} from "lucide-react";

const ApiDocs = () => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Complete guide to integrating with LaunchMails API. Send emails, verify domains, and track delivery logs.
                    </p>
                </div>

                {/* Quick Start */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Code className="mr-2 h-5 w-5" />
                            Quick Start
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Get started with LaunchMails API in minutes. All endpoints are RESTful and return JSON responses.
                            </p>
                            <div className="bg-muted p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Base URL</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyToClipboard('http://localhost:4000/api')}
                                    >
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                                <code className="text-sm">http://localhost:4000/api</code>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Authentication */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5" />
                            Authentication
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Currently, LaunchMails API is open for development. In production, you'll need to include your API key in the Authorization header.
                            </p>
                            <div className="bg-muted p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Example Header</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyToClipboard('Authorization: Bearer your-api-key')}
                                    >
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                                <code className="text-sm">Authorization: Bearer your-api-key</code>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Endpoints Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Send Email */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Mail className="mr-2 h-5 w-5" />
                                Send Email
                            </CardTitle>
                            <Badge variant="secondary">POST</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div>
                                    <code className="text-sm bg-muted px-2 py-1 rounded">/send-email</code>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Send transactional emails with HTML and text content.
                                </p>
                                <div className="bg-muted p-3 rounded text-xs">
                                    <pre>{`{
  "to": "user@example.com",
  "subject": "Welcome!",
  "body": "Hello world",
  "html": "<h1>Hello!</h1>"
}`}</pre>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Verify Domain */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Globe className="mr-2 h-5 w-5" />
                                Verify Domain
                            </CardTitle>
                            <Badge variant="secondary">POST</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div>
                                    <code className="text-sm bg-muted px-2 py-1 rounded">/verify-domain</code>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Verify domain ownership for better deliverability.
                                </p>
                                <div className="bg-muted p-3 rounded text-xs">
                                    <pre>{`{
  "domain": "example.com"
}`}</pre>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Get Logs */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FileText className="mr-2 h-5 w-5" />
                                Get Logs
                            </CardTitle>
                            <Badge variant="outline">GET</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div>
                                    <code className="text-sm bg-muted px-2 py-1 rounded">/logs</code>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Retrieve email delivery logs with filtering options.
                                </p>
                                <div className="bg-muted p-3 rounded text-xs">
                                    <pre>{`?limit=50&offset=0&status=sent`}</pre>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Response Examples */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Response Examples</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {/* Success Response */}
                            <div>
                                <h4 className="font-semibold mb-2">Success Response</h4>
                                <div className="bg-muted p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium">200 OK</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => copyToClipboard(`{
  "success": true,
  "message": "Email sent successfully",
  "data": {
    "messageId": "abc123",
    "logId": "log456"
  }
}`)}
                                        >
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <pre className="text-sm">{`{
  "success": true,
  "message": "Email sent successfully",
  "data": {
    "messageId": "abc123",
    "logId": "log456"
  }
}`}</pre>
                                </div>
                            </div>

                            {/* Error Response */}
                            <div>
                                <h4 className="font-semibold mb-2">Error Response</h4>
                                <div className="bg-muted p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium">400 Bad Request</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => copyToClipboard(`{
  "success": false,
  "error": "Validation failed",
  "details": ["Email is required"]
}`)}
                                        >
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <pre className="text-sm">{`{
  "success": false,
  "error": "Validation failed",
  "details": ["Email is required"]
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Rate Limits */}
                <div className="mb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
                        <p className="text-lg text-muted-foreground">
                            Start free and scale as you grow. All plans include our core email API features.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Free Tier Card */}
                        <Card className="group hover:shadow-lg transition-all duration-300 hover:bg-blue-50/50 border-2 hover:border-blue-200">
                            <CardHeader className="text-center pb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                                    <Mail className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-blue-600">Free Tier</CardTitle>
                                <p className="text-muted-foreground mt-2">
                                    Perfect for getting started with email automation
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">100 emails per day</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">1 verified domain</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">Basic support</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">Email logs & analytics</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t">
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-blue-600">$0</span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Pro Tier Card */}
                        <Card className="group hover:shadow-lg transition-all duration-300 hover:bg-blue-50/50 border-2 border-blue-200 hover:border-blue-300 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <Badge className="bg-blue-600 text-white px-4 py-1">
                                    <Star className="h-3 w-3 mr-1" />
                                    Most Popular
                                </Badge>
                            </div>
                            <CardHeader className="text-center pb-4 pt-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                                    <Zap className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-blue-600">Pro Tier</CardTitle>
                                <p className="text-muted-foreground mt-2">
                                    For growing businesses and high-volume email needs
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">10,000 emails per day</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">5 verified domains</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">Priority support</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">Advanced analytics</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium">API rate limit increases</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t">
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-blue-600">$29</span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="py-8">
                            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                            <p className="text-muted-foreground mb-6">
                                Sign up for a free account and start sending emails in minutes.
                            </p>
                            <Button size="lg" className="group">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ApiDocs;
