import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  ChevronDown, 
  Plus, 
  Globe, 
  Settings, 
  Users, 
  BarChart3,
  Palette,
  Check
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  domain: string;
  description: string;
  subscribers: number;
  status: 'active' | 'paused' | 'draft';
  color: string;
  lastActivity: string;
}

const ProjectSwitcher = () => {
  const [selectedProject, setSelectedProject] = useState("project-1");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    domain: "",
    description: "",
    color: "#3B82F6"
  });

  const projects: Project[] = [
    {
      id: "project-1",
      name: "E-commerce Store",
      domain: "shop.example.com",
      description: "Main e-commerce platform with product updates and promotions",
      subscribers: 12450,
      status: "active",
      color: "#3B82F6",
      lastActivity: "2 hours ago"
    },
    {
      id: "project-2", 
      name: "SaaS Platform",
      domain: "app.saas.com",
      description: "Product updates, feature announcements, and user onboarding",
      subscribers: 8960,
      status: "active",
      color: "#10B981",
      lastActivity: "1 day ago"
    },
    {
      id: "project-3",
      name: "Blog Newsletter",
      domain: "blog.company.com", 
      description: "Weekly content digest and article notifications",
      subscribers: 5620,
      status: "paused",
      color: "#F59E0B",
      lastActivity: "3 days ago"
    },
    {
      id: "project-4",
      name: "Mobile App",
      domain: "mobile.app.com",
      description: "Push notification campaigns and app updates",
      subscribers: 3240,
      status: "draft",
      color: "#8B5CF6",
      lastActivity: "1 week ago"
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject);

  const handleCreateProject = () => {
    // Handle project creation logic here
    console.log("Creating project:", newProject);
    setIsCreateOpen(false);
    setNewProject({ name: "", domain: "", description: "", color: "#3B82F6" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "paused": return "secondary";
      case "draft": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Project Management</h2>
          <p className="text-muted-foreground">Manage multiple projects and switch between them easily</p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button variant="hero">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  placeholder="My Awesome Project"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="domain">Domain</Label>
                <Input
                  id="domain"
                  placeholder="project.mysite.com"
                  value={newProject.domain}
                  onChange={(e) => setNewProject({ ...newProject, domain: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of this project..."
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="color">Brand Color</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <input
                    type="color"
                    value={newProject.color}
                    onChange={(e) => setNewProject({ ...newProject, color: e.target.value })}
                    className="w-10 h-10 rounded border border-border"
                  />
                  <Input
                    value={newProject.color}
                    onChange={(e) => setNewProject({ ...newProject, color: e.target.value })}
                    placeholder="#3B82F6"
                  />
                </div>
              </div>
              <Button onClick={handleCreateProject} className="w-full">
                Create Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Current Project Info */}
      {currentProject && (
        <Card className="border-border shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: currentProject.color }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{currentProject.name}</h3>
                  <p className="text-sm text-muted-foreground">{currentProject.domain}</p>
                </div>
                <Badge variant={getStatusColor(currentProject.status)}>
                  {currentProject.status}
                </Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Subscribers</p>
                  <p className="font-semibold">{currentProject.subscribers.toLocaleString()}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Project Switcher */}
      <Card className="border-border shadow-soft">
        <CardHeader>
          <CardTitle>Switch Project</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-full">
              <div className="flex items-center">
                {currentProject && (
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: currentProject.color }}
                  />
                )}
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {projects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: project.color }}
                    />
                    <span>{project.name}</span>
                    <Badge 
                      variant={getStatusColor(project.status)} 
                      className="ml-2"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* All Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className={`border-border shadow-soft cursor-pointer transition-all hover:shadow-md ${
              selectedProject === project.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedProject(project.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: project.color }}
                  />
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  {selectedProject === project.id && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>
                <Badge variant={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Globe className="mr-2 h-4 w-4" />
                  {project.domain}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center text-sm">
                    <Users className="mr-1 h-4 w-4" />
                    {project.subscribers.toLocaleString()}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {project.lastActivity}
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="text-center p-2 bg-secondary/50 rounded">
                    <BarChart3 className="h-4 w-4 mx-auto mb-1" />
                    <p className="text-xs">Analytics</p>
                  </div>
                  <div className="text-center p-2 bg-secondary/50 rounded">
                    <Users className="h-4 w-4 mx-auto mb-1" />
                    <p className="text-xs">Lists</p>
                  </div>
                  <div className="text-center p-2 bg-secondary/50 rounded">
                    <Settings className="h-4 w-4 mx-auto mb-1" />
                    <p className="text-xs">Settings</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectSwitcher;