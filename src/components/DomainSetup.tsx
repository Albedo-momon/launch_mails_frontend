import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  CheckCircle,
  AlertTriangle,
  Plus,
  Trash2
} from "lucide-react";

interface Domain {
  id: number;
  domain: string;
  status: 'verified' | 'pending' | 'failed';
}

const DomainSetup = () => {
  const [newDomain, setNewDomain] = useState("");
  const [domains, setDomains] = useState<Domain[]>([
    {
      id: 1,
      domain: "mail.example.com",
      status: "verified"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleAddDomain = async () => {
    if (!newDomain) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/verify-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: newDomain })
      });

      const result = await response.json();

      const domain: Domain = {
        id: Date.now(),
        domain: newDomain,
        status: result.verified ? 'verified' : 'pending'
      };

      setDomains([...domains, domain]);
      setNewDomain("");
    } catch (error) {
      console.error('Failed to add domain:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDomain = (id: number) => {
    setDomains(domains.filter(d => d.id !== id));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge variant="default" className="bg-green-100 text-green-800">Verified</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Domain Setup</h2>
        <p className="text-muted-foreground">Add and verify your sending domains</p>
      </div>

      {/* Add New Domain */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Add New Domain
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-3">
            <div className="flex-1">
              <Label htmlFor="domain">Domain Name</Label>
              <Input
                id="domain"
                placeholder="mail.yourdomain.com"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleAddDomain}
                disabled={loading || !newDomain}
              >
                {loading ? "Adding..." : "Add Domain"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Domain List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            Your Domains
          </CardTitle>
        </CardHeader>
        <CardContent>
          {domains.length === 0 ? (
            <div className="text-center py-8">
              <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No domains added</h3>
              <p className="text-muted-foreground">
                Add your first domain to start sending emails.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {domains.map((domain) => (
                <div key={domain.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {domain.status === 'verified' ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    )}
                    <div>
                      <h4 className="font-semibold">{domain.domain}</h4>
                      <p className="text-sm text-muted-foreground">
                        {domain.status === 'verified'
                          ? 'Ready to send emails'
                          : 'Verification pending'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(domain.status)}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteDomain(domain.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainSetup;