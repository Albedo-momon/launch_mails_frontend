import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Copy, 
  Eye,
  RefreshCw,
  Key,
  Globe,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const APIIntegration = () => {
  const [selectedProject, setSelectedProject] = useState("website-a");
  const [selectedList, setSelectedList] = useState("beta-users");

  const projects = [
    { id: "website-a", name: "Website A", domain: "example.com" },
    { id: "mobile-app", name: "Mobile App", domain: "app.example.com" },
    { id: "ecommerce", name: "E-commerce Store", domain: "shop.example.com" }
  ];

  const lists = [
    { id: "beta-users", name: "Beta Users", subscribers: 1245 },
    { id: "newsletter", name: "Newsletter", subscribers: 5632 },
    { id: "launch-notify", name: "Notify on Launch", subscribers: 2341 }
  ];

  const apiKeys = [
    { id: 1, name: "Production Key", key: "mf_live_pk_1234567890abcdef", created: "2024-01-15", lastUsed: "2 hours ago", status: "active" },
    { id: 2, name: "Development Key", key: "mf_test_pk_abcdef1234567890", created: "2024-01-10", lastUsed: "1 day ago", status: "active" },
    { id: 3, name: "Staging Key", key: "mf_test_pk_fedcba0987654321", created: "2024-01-05", lastUsed: "Never", status: "inactive" }
  ];

  const webhookEndpoints = [
    { id: 1, url: "https://api.example.com/webhooks/mailflow", events: ["subscribe", "unsubscribe"], status: "active", lastDelivery: "5 min ago" },
    { id: 2, url: "https://staging.example.com/webhooks", events: ["subscribe"], status: "failed", lastDelivery: "2 hours ago" }
  ];

  const generateAPIEndpoint = () => {
    const baseUrl = "https://api.mailflow.com/v1";
    return `${baseUrl}/projects/${selectedProject}/lists/${selectedList}/subscribe`;
  };

  const codeExamples = {
    curl: `curl -X POST "${generateAPIEndpoint()}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "tags": ["new-user"],
    "double_opt_in": true
  }'`,
    
    javascript: `fetch('${generateAPIEndpoint()}', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    name: 'John Doe',
    tags: ['new-user'],
    double_opt_in: true
  })
});`,

    python: `import requests

url = "${generateAPIEndpoint()}"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "email": "user@example.com",
    "name": "John Doe", 
    "tags": ["new-user"],
    "double_opt_in": True
}

response = requests.post(url, headers=headers, json=data)`
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">API Integration</h2>
        <p className="text-muted-foreground">Integrate your applications with MailFlow APIs</p>
      </div>

      <Tabs defaultValue="endpoints" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
          <TabsTrigger value="keys">API Keys</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="docs">Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="endpoints" className="space-y-6">
          {/* Project and List Selection */}
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle>Generate API Endpoint</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Project:</label>
                  <select 
                    className="w-full p-2 border border-border rounded"
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                  >
                    {projects.map(project => (
                      <option key={project.id} value={project.id}>{project.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Select List:</label>
                  <select 
                    className="w-full p-2 border border-border rounded"
                    value={selectedList}
                    onChange={(e) => setSelectedList(e.target.value)}
                  >
                    {lists.map(list => (
                      <option key={list.id} value={list.id}>{list.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded p-3 mb-4">
                <div className="flex items-center justify-between">
                  <code className="text-sm">{generateAPIEndpoint()}</code>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Use this endpoint to add subscribers to the selected list programmatically.
              </p>
            </CardContent>
          </Card>

          {/* Code Examples */}
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Code Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curl">
                <TabsList>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([language, code]) => (
                  <TabsContent key={language} value={language}>
                    <div className="relative">
                      <pre className="bg-background border border-border rounded p-4 overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button variant="ghost" size="sm" className="absolute top-2 right-2">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keys" className="space-y-6">
          <Card className="border-border shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Key className="mr-2 h-5 w-5" />
                  API Keys
                </CardTitle>
                <Button variant="hero">
                  <Key className="mr-2 h-4 w-4" />
                  Generate New Key
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-foreground">{apiKey.name}</h4>
                        <Badge variant={apiKey.status === 'active' ? 'default' : 'secondary'}>
                          {apiKey.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <code className="text-sm bg-secondary/50 px-2 py-1 rounded">
                          {apiKey.key.substring(0, 20)}...
                        </code>
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Created {apiKey.created} • Last used {apiKey.lastUsed}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card className="border-border shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Webhook Endpoints
                </CardTitle>
                <Button variant="hero">
                  Add Webhook
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {webhookEndpoints.map((webhook) => (
                  <div key={webhook.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <code className="text-sm">{webhook.url}</code>
                        {webhook.status === 'active' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        {webhook.events.map((event) => (
                          <Badge key={event} variant="outline" className="text-xs">
                            {event}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last delivery: {webhook.lastDelivery}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Test
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs" className="space-y-6">
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Authentication</h3>
                  <p className="text-muted-foreground mb-2">
                    All API requests require authentication using your API key in the Authorization header:
                  </p>
                  <div className="bg-secondary/50 rounded p-3">
                    <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Endpoints</h3>
                  <div className="space-y-3">
                    <div className="border border-border rounded p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="default">POST</Badge>
                        <code className="text-sm">/v1/projects/:id/lists/:list_id/subscribe</code>
                      </div>
                      <p className="text-sm text-muted-foreground">Add a subscriber to a specific list</p>
                    </div>
                    
                    <div className="border border-border rounded p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">DELETE</Badge>
                        <code className="text-sm">/v1/projects/:id/lists/:list_id/unsubscribe</code>
                      </div>
                      <p className="text-sm text-muted-foreground">Remove a subscriber from a list</p>
                    </div>
                    
                    <div className="border border-border rounded p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">GET</Badge>
                        <code className="text-sm">/v1/projects/:id/lists/:list_id/subscribers</code>
                      </div>
                      <p className="text-sm text-muted-foreground">Get all subscribers in a list</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Response Format</h3>
                  <p className="text-muted-foreground mb-2">All responses are returned in JSON format:</p>
                  <div className="bg-secondary/50 rounded p-3">
                    <pre className="text-sm">
{`{
  "success": true,
  "data": {
    "id": "sub_1234567890",
    "email": "user@example.com",
    "status": "subscribed"
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default APIIntegration;