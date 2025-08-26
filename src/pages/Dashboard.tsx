import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Send, 
  Users, 
  BarChart3, 
  Calendar,
  FolderTree,
  Mail,
  Clock,
  TrendingUp,
  Eye
} from "lucide-react";

const Dashboard = () => {
  // Mock data
  const projects = [
    { id: 1, name: "Website A", campaigns: 12, subscribers: 2847 },
    { id: 2, name: "Mobile App", campaigns: 8, subscribers: 1653 },
    { id: 3, name: "E-commerce Store", campaigns: 15, subscribers: 4291 }
  ];

  const recentCampaigns = [
    { id: 1, name: "Welcome Series #3", status: "sent", opens: 342, clicks: 89, sentDate: "2024-01-15" },
    { id: 2, name: "Product Launch Announcement", status: "scheduled", opens: 0, clicks: 0, sentDate: "2024-01-20" },
    { id: 3, name: "Weekly Newsletter #47", status: "draft", opens: 0, clicks: 0, sentDate: null }
  ];

  const stats = [
    { title: "Total Subscribers", value: "8,791", change: "+12%", icon: <Users className="h-5 w-5" /> },
    { title: "Campaigns Sent", value: "35", change: "+8%", icon: <Send className="h-5 w-5" /> },
    { title: "Open Rate", value: "24.3%", change: "+2.1%", icon: <Eye className="h-5 w-5" /> },
    { title: "Click Rate", value: "3.8%", change: "+0.4%", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Manage your email campaigns and projects</p>
            </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Campaign
            </Button>
            <Button variant="outline">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button variant="hero">
              <Plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  <span className="text-sm text-muted-foreground ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FolderTree className="mr-2 h-5 w-5" />
                    Your Projects
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div>
                        <h4 className="font-semibold text-foreground">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.campaigns} campaigns • {project.subscribers.toLocaleString()} subscribers
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Manage
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Campaigns */}
            <Card className="border-border shadow-soft mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Recent Campaigns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-foreground">{campaign.name}</h4>
                          <Badge variant={
                            campaign.status === 'sent' ? 'default' : 
                            campaign.status === 'scheduled' ? 'secondary' : 'outline'
                          }>
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          {campaign.status === 'sent' && (
                            <>
                              <span>{campaign.opens} opens</span>
                              <span>{campaign.clicks} clicks</span>
                              <span>Sent {campaign.sentDate}</span>
                            </>
                          )}
                          {campaign.status === 'scheduled' && (
                            <>
                              <Clock className="h-4 w-4" />
                              <span>Scheduled for {campaign.sentDate}</span>
                            </>
                          )}
                          {campaign.status === 'draft' && (
                            <span>Draft - not sent</span>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {campaign.status === 'draft' ? 'Edit' : 'View'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Campaign
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Lists
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Email Template Preview */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Email Template</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                  <div className="text-sm font-medium">🚀 [Product Name] is Live!</div>
                  <div className="text-xs text-muted-foreground">
                    Hi {'{{username}}'},<br/><br/>
                    We're excited to announce the launch of [Product Name].<br/><br/>
                    [ Call to Action Button ]<br/><br/>
                    Thanks,<br/>
                    — The [Company] Team
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Edit Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;