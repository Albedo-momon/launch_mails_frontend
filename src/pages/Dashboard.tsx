import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Globe,
  Key
} from "lucide-react";
import DomainSetup from "@/components/DomainSetup";
import APIIntegration from "@/components/APIIntegration";
import Logs from "@/components/Logs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("domains");

  const tabs = [
    { id: "domains", label: "Domains", icon: <Globe className="h-4 w-4" /> },
    { id: "api", label: "API", icon: <Key className="h-4 w-4" /> },
    { id: "logs", label: "Logs", icon: <Mail className="h-4 w-4" /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "domains":
        return <DomainSetup />;
      case "api":
        return <APIIntegration />;
      case "logs":
        return <Logs />;
      default:
        return <DomainSetup />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your domains, API keys, and view email logs
              </p>
            </div>
            <Badge variant="secondary">Free Plan</Badge>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center space-x-2"
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;