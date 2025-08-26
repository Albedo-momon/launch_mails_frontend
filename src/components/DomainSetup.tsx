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
  Settings,
  Trash2
} from "lucide-react";

const DomainSetup = () => {
  const [newDomain, setNewDomain] = useState("");
  const [domains, setDomains] = useState([
    { 
      id: 1, 
      domain: "mail.kaveri.com", 
      status: "verified", 
      dkimSetup: true, 
      spfSetup: true,
      dmarcSetup: true 
    },
    { 
      id: 2, 
      domain: "newsletter.mycompany.com", 
      status: "pending", 
      dkimSetup: false, 
      spfSetup: true,
      dmarcSetup: false 
    }
  ]);

  const handleAddDomain = () => {
    if (newDomain) {
      const domain = {
        id: Date.now(),
        domain: newDomain,
        status: "pending",
        dkimSetup: false,
        spfSetup: false,
        dmarcSetup: false
      };
      setDomains([...domains, domain]);
      setNewDomain("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "default";
      case "pending": return "secondary";
      case "failed": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Domain Setup</h2>
        <p className="text-muted-foreground">Configure sending domains for better deliverability</p>
      </div>

      {/* Add New Domain */}
      <Card className="border-border shadow-soft">
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
              <Button onClick={handleAddDomain} variant="hero">
                Add Domain
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Domain List */}
      <Card className="border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            Your Domains
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {domains.map((domain) => (
              <div key={domain.id} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-foreground">{domain.domain}</h4>
                    <Badge variant={getStatusColor(domain.status)}>
                      {domain.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* DNS Records Status */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    {domain.dkimSetup ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                    <span className="text-sm">DKIM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {domain.spfSetup ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                    <span className="text-sm">SPF</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {domain.dmarcSetup ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                    <span className="text-sm">DMARC</span>
                  </div>
                </div>

                {domain.status === "pending" && (
                  <div className="mt-3 p-3 bg-accent/50 rounded border">
                    <p className="text-sm text-muted-foreground">
                      Add these DNS records to verify your domain:
                    </p>
                    <div className="mt-2 text-xs font-mono bg-background p-2 rounded">
                      <div>TXT: v=spf1 include:mailflow.com ~all</div>
                      <div>CNAME: dkim._domainkey.{domain.domain} → dkim.mailflow.com</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainSetup;