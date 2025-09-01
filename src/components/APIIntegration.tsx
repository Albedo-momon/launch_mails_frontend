import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Copy,
  Key,
  CheckCircle,
  RefreshCw
} from "lucide-react";

const APIIntegration = () => {
  const [apiKey, setApiKey] = useState("lm_live_pk_1234567890abcdef");
  const [showKey, setShowKey] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const generateNewKey = () => {
    const newKey = `lm_live_pk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    setApiKey(newKey);
  };

  const maskedKey = apiKey.replace(/(.{8}).*(.{8})/, '$1' + '•'.repeat(16) + '$2');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">API Integration</h2>
        <p className="text-muted-foreground">Use your API key to send emails programmatically</p>
      </div>

      {/* API Key */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key className="mr-2 h-5 w-5" />
            API Key
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Active
              </Badge>
              <span className="text-sm text-muted-foreground">Created 2 days ago</span>
            </div>

            <div className="flex items-center space-x-2">
              <code className="flex-1 p-3 bg-muted rounded font-mono text-sm">
                {showKey ? apiKey : maskedKey}
              </code>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? "Hide" : "Show"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(apiKey)}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={generateNewKey}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="mr-2 h-5 w-5" />
            Send Email API
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Endpoint</h4>
              <code className="block p-3 bg-muted rounded font-mono text-sm">
                POST http://localhost:4000/api/send-email
              </code>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Headers</h4>
              <code className="block p-3 bg-muted rounded font-mono text-sm">
                Content-Type: application/json
              </code>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Request Body</h4>
              <pre className="p-3 bg-muted rounded font-mono text-sm overflow-x-auto">
                {`{
  "to": "user@example.com",
  "subject": "Welcome to LaunchMails",
  "body": "Hello! Welcome to our service.",
  "html": "<h1>Hello!</h1><p>Welcome to our service.</p>"
}`}
              </pre>
            </div>

            <div>
              <h4 className="font-semibold mb-2">cURL Example</h4>
              <pre className="p-3 bg-muted rounded font-mono text-sm overflow-x-auto">
                {`curl -X POST http://localhost:4000/api/send-email \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user@example.com",
    "subject": "Welcome to LaunchMails",
    "body": "Hello! Welcome to our service.",
    "html": "<h1>Hello!</h1><p>Welcome to our service.</p>"
  }'`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rate Limits */}
      <Card>
        <CardHeader>
          <CardTitle>Rate Limits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Free Tier</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 100 emails per day</li>
                <li>• 1 verified domain</li>
                <li>• Basic support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage This Month</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 45 emails sent</li>
                <li>• 55 remaining</li>
                <li>• Resets in 12 days</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default APIIntegration;