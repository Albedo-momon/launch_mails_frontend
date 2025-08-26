import { useState } from "react";
import DashboardNavigation from "@/components/DashboardNavigation";
import DomainSetup from "@/components/DomainSetup";
import TemplateLibrary from "@/components/TemplateLibrary";
import UserManagement from "@/components/UserManagement";
import APIIntegration from "@/components/APIIntegration";
import CampaignScheduling from "@/components/CampaignScheduling";
import Analytics from "@/components/Analytics";
import ProjectSwitcher from "@/components/ProjectSwitcher";
import Dashboard from "./Dashboard";

const AdvancedDashboard = () => {
  const [activeView, setActiveView] = useState("overview");

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <Dashboard />;
      case "analytics":
        return <Analytics />;
      case "projects":
        return <ProjectSwitcher />;
      case "domains":
        return <DomainSetup />;
      case "templates":
        return <TemplateLibrary />;
      case "users":
        return <UserManagement />;
      case "api":
        return <APIIntegration />;
      case "scheduling":
        return <CampaignScheduling />;
      case "settings":
        return <div className="p-8"><h2 className="text-2xl font-bold">Settings</h2><p className="text-muted-foreground">Settings panel coming soon...</p></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full z-10">
        <DashboardNavigation 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 transition-all duration-300">
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;