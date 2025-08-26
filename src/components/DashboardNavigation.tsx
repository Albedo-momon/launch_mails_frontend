import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard,
  Globe,
  FileText,
  Users,
  Code,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Folder
} from "lucide-react";

interface DashboardNavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const DashboardNavigation = ({ activeView, onViewChange }: DashboardNavigationProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard className="h-5 w-5" /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <Folder className="h-5 w-5" /> },
    { id: "domains", label: "Domain Setup", icon: <Globe className="h-5 w-5" /> },
    { id: "templates", label: "Templates", icon: <FileText className="h-5 w-5" /> },
    { id: "users", label: "User Management", icon: <Users className="h-5 w-5" /> },
    { id: "api", label: "API Integration", icon: <Code className="h-5 w-5" /> },
    { id: "scheduling", label: "Scheduling", icon: <Calendar className="h-5 w-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> }
  ];

  return (
    <Card className={`border-border shadow-soft transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <h2 className="font-semibold text-foreground">MailFlow</h2>
          )}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="p-2">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeView === item.id ? "default" : "ghost"}
                className={`w-full ${isCollapsed ? 'px-2' : 'justify-start'}`}
                onClick={() => onViewChange(item.id)}
              >
                {item.icon}
                {!isCollapsed && <span className="ml-2">{item.label}</span>}
              </Button>
            ))}
          </div>
        </nav>

        {/* Upgrade Banner */}
        {!isCollapsed && (
          <div className="p-4 border-t border-border">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-3">
              <h3 className="font-semibold text-sm text-foreground mb-1">Upgrade to Pro</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Unlock unlimited campaigns and advanced features
              </p>
              <Button size="sm" variant="hero" className="w-full">
                Upgrade Now
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardNavigation;