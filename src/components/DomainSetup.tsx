import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Globe,
  CheckCircle,
  AlertTriangle,
  Plus,
  Trash2,
  Copy,
  RefreshCw,
  Info,
  ExternalLink
} from "lucide-react";

interface Domain {
  id: number;
  domain: string;
  status: 'verified' | 'pending' | 'failed';
  addedAt: string;
  dnsRecords?: {
    spf: string;
    dkim: string;
    dmarc: string;
  };
}

const DomainSetup = () => {
  const [newDomain, setNewDomain] = useState("");
  const [domains, setDomains] = useState<Domain[]>([
    {
      id: 1,
      domain: "mail.example.com",
      status: "verified",
      addedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      dnsRecords: {
        spf: "v=spf1 include:_spf.launchmails.com ~all",
        dkim: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...",
        dmarc: "v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com"
      }
    },
    {
      id: 2,
      domain: "test.mydomain.com",
      status: "pending",
      addedAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      dnsRecords: {
        spf: "v=spf1 include:_spf.launchmails.com ~all",
        dkim: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...",
        dmarc: "v=DMARC1; p=quarantine; rua=mailto:dmarc@test.mydomain.com"
      }
    },
    {
      id: 3,
      domain: "fail.baddomain.com",
      status: "failed",
      addedAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
      dnsRecords: {
        spf: "v=spf1 include:_spf.launchmails.com ~all",
        dkim: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...",
        dmarc: "v=DMARC1; p=quarantine; rua=mailto:dmarc@fail.baddomain.com"
      }
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [domainError, setDomainError] = useState("");

  // Domain validation
  const validateDomain = (domain: string): boolean => {
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/;
    return domainRegex.test(domain);
  };

  const handleAddDomain = async () => {
    if (!newDomain) {
      setDomainError("Domain name is required");
      return;
    }

    if (!validateDomain(newDomain)) {
      setDomainError("Please enter a valid domain name");
      return;
    }

    setDomainError("");
    setLoading(true);

    try {
      // Mock API call - simulate different scenarios for testing
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

      // Simulate different outcomes based on domain name for testing
      let status: 'verified' | 'pending' | 'failed' = 'pending';

      if (newDomain.includes('test') || newDomain.includes('example')) {
        status = 'verified'; // Happy scenario
      } else if (newDomain.includes('fail') || newDomain.includes('error')) {
        status = 'failed'; // Failure scenario
      } else {
        status = 'pending'; // Default scenario
      }

      const domain: Domain = {
        id: Date.now(),
        domain: newDomain,
        status: status,
        addedAt: new Date().toISOString(),
        dnsRecords: {
          spf: `v=spf1 include:_spf.launchmails.com ~all`,
          dkim: `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...`,
          dmarc: `v=DMARC1; p=quarantine; rua=mailto:dmarc@${newDomain}`
        }
      };

      setDomains([...domains, domain]);
      setNewDomain("");

      // Show different toast messages based on status
      if (status === 'verified') {
        toast.success("Domain added and verified successfully!");
      } else if (status === 'failed') {
        toast.error("Domain verification failed. Please check your DNS settings.");
      } else {
        toast.success("Domain added! Please configure DNS records to complete verification.");
      }
    } catch (error) {
      console.error('Failed to add domain:', error);
      toast.error("Failed to add domain. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDomain = (id: number) => {
    setDomains(domains.filter(d => d.id !== id));
    toast.success("Domain deleted successfully!");
  };

  const handleRefreshDomain = async (id: number) => {
    setLoading(true);
    try {
      // Mock API call to refresh domain status
      await new Promise(resolve => setTimeout(resolve, 1000));

      setDomains(domains.map(domain => {
        if (domain.id === id) {
          // Simulate status changes for testing
          const currentStatus = domain.status;
          let newStatus: 'verified' | 'pending' | 'failed' = currentStatus;

          if (currentStatus === 'pending') {
            newStatus = Math.random() > 0.5 ? 'verified' : 'failed';
          } else if (currentStatus === 'failed') {
            newStatus = Math.random() > 0.7 ? 'verified' : 'pending';
          } else if (currentStatus === 'verified') {
            newStatus = Math.random() > 0.8 ? 'failed' : 'verified';
          }

          return { ...domain, status: newStatus };
        }
        return domain;
      }));

      toast.success("Domain status refreshed!");
    } catch (error) {
      toast.error("Failed to refresh domain status");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} record copied to clipboard!`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">Verified</Badge>;
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "failed":
        return <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Domain Setup</h2>
        <p className="text-lg text-muted-foreground">Add and verify your sending domains for better email deliverability</p>
      </div>

      {/* Add New Domain */}
      <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-xl">
            <Plus className="mr-3 h-6 w-6 text-primary" />
            Add New Domain
          </CardTitle>
          <p className="text-muted-foreground">Enter your domain name to get started with email sending</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="domain" className="text-sm font-medium">Domain Name</Label>
            <Input
              id="domain"
              placeholder="mail.yourdomain.com"
              value={newDomain}
              onChange={(e) => {
                setNewDomain(e.target.value);
                setDomainError("");
              }}
              className={`h-12 text-base ${domainError ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {domainError && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-1" />
                {domainError}
              </p>
            )}
          </div>
          <Button
            onClick={handleAddDomain}
            disabled={loading || !newDomain}
            className="w-full h-12 text-base font-semibold"
            size="lg"
          >
            {loading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Adding Domain...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Add Domain
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Domain List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-foreground">Your Domains</h3>
          <Badge variant="outline" className="text-sm">
            {domains.length} domain{domains.length !== 1 ? 's' : ''}
          </Badge>
        </div>

        {domains.length === 0 ? (
          <Card className="border-2 border-dashed border-muted-foreground/25">
            <CardContent className="text-center py-12">
              <Globe className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No domains added yet</h3>
              <p className="text-muted-foreground mb-6">
                Add your first domain to start sending emails with better deliverability.
              </p>
              <Button variant="outline" size="lg">
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Domain
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {domains.map((domain) => (
              <Card key={domain.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {domain.status === 'verified' ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : domain.status === 'failed' ? (
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                      ) : (
                        <AlertTriangle className="h-6 w-6 text-yellow-500" />
                      )}
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{domain.domain}</h4>
                        <p className="text-sm text-muted-foreground">
                          Added {new Date(domain.addedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {getStatusBadge(domain.status)}
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRefreshDomain(domain.id)}
                          disabled={loading}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteDomain(domain.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {/* DNS Records Panel */}
                {domain.dnsRecords && (
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Info className="h-4 w-4 text-blue-500" />
                        <h5 className="font-semibold text-foreground">DNS Verification Records</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Add these DNS records to your domain to complete verification:
                      </p>

                      <div className="grid gap-4">
                        {/* SPF Record */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-blue-600">SPF Record (TXT)</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(domain.dnsRecords!.spf, "SPF")}
                              className="h-8 w-8 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="p-3 bg-muted rounded-lg">
                            <code className="text-sm font-mono break-all">{domain.dnsRecords.spf}</code>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Prevents email spoofing and improves deliverability
                          </p>
                        </div>

                        {/* DKIM Record */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-green-600">DKIM Record (TXT)</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(domain.dnsRecords!.dkim, "DKIM")}
                              className="h-8 w-8 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="p-3 bg-muted rounded-lg">
                            <code className="text-sm font-mono break-all">{domain.dnsRecords.dkim}</code>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Provides email authentication and integrity verification
                          </p>
                        </div>

                        {/* DMARC Record */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-purple-600">DMARC Record (TXT)</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(domain.dnsRecords!.dmarc, "DMARC")}
                              className="h-8 w-8 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="p-3 bg-muted rounded-lg">
                            <code className="text-sm font-mono break-all">{domain.dnsRecords.dmarc}</code>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Defines how to handle emails that fail SPF or DKIM checks
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <ExternalLink className="h-4 w-4" />
                          <span>Need help? Check our </span>
                          <Button variant="link" className="p-0 h-auto text-primary">
                            DNS setup guide
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainSetup;