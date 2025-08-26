import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  Clock,
  Play,
  Pause,
  Trash2,
  Edit,
  Send,
  Eye,
  Plus
} from "lucide-react";

const CampaignScheduling = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const scheduledCampaigns = [
    {
      id: 1,
      name: "Welcome Series #4",
      subject: "Complete your profile",
      list: "Beta Users",
      scheduledFor: "2024-01-25 09:00",
      status: "scheduled",
      recipients: 1245,
      template: "Welcome Template"
    },
    {
      id: 2,
      name: "Product Update Newsletter",
      subject: "New features this week",
      list: "Newsletter",
      scheduledFor: "2024-01-26 14:00",
      status: "scheduled",
      recipients: 5632,
      template: "Newsletter Template"
    },
    {
      id: 3,
      name: "Weekend Sale Promotion",
      subject: "Save 30% this weekend only!",
      list: "Customers",
      scheduledFor: "2024-01-27 10:00",
      status: "paused",
      recipients: 987,
      template: "Promotion Template"
    }
  ];

  const campaignTemplates = [
    { id: 1, name: "Welcome Series Template", category: "onboarding" },
    { id: 2, name: "Newsletter Template", category: "newsletter" },
    { id: 3, name: "Promotion Template", category: "sales" },
    { id: 4, name: "Event Invitation", category: "event" }
  ];

  const projects = [
    { id: 1, name: "Website A" },
    { id: 2, name: "Mobile App" },
    { id: 3, name: "E-commerce Store" }
  ];

  const lists = [
    { id: 1, name: "Beta Users", count: 1245 },
    { id: 2, name: "Newsletter", count: 5632 },
    { id: 3, name: "Customers", count: 987 },
    { id: 4, name: "Notify on Launch", count: 2341 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "default";
      case "sending": return "secondary";
      case "paused": return "outline";
      case "completed": return "default";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Campaign Scheduling</h2>
        <p className="text-muted-foreground">Schedule and manage your email campaigns</p>
      </div>

      <Tabs defaultValue="scheduled" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scheduled">Scheduled Campaigns</TabsTrigger>
          <TabsTrigger value="create">Create Campaign</TabsTrigger>
        </TabsList>

        <TabsContent value="scheduled" className="space-y-6">
          {/* Overview Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border-border shadow-soft">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-soft">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">0</p>
                  <p className="text-sm text-muted-foreground">Sending</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-soft">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">7,864</p>
                  <p className="text-sm text-muted-foreground">Recipients</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-soft">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">This Week</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Scheduled Campaigns List */}
          <Card className="border-border shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Scheduled Campaigns
                </CardTitle>
                <Button variant="hero">
                  <Plus className="mr-2 h-4 w-4" />
                  Schedule New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-foreground">{campaign.name}</h4>
                          <Badge variant={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Subject: {campaign.subject}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>📧 {campaign.list}</span>
                          <span>👥 {campaign.recipients.toLocaleString()} recipients</span>
                          <span>📄 {campaign.template}</span>
                        </div>
                        <div className="flex items-center mt-2 text-sm">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Scheduled for {new Date(campaign.scheduledFor).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {campaign.status === "scheduled" && (
                          <Button variant="ghost" size="sm">
                            <Pause className="h-4 w-4" />
                          </Button>
                        )}
                        {campaign.status === "paused" && (
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2 h-5 w-5" />
                Create New Campaign
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Campaign Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input 
                    id="campaign-name" 
                    placeholder="Enter campaign name" 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Email Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Enter email subject" 
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Project and List Selection */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="project">Select Project</Label>
                  <select 
                    id="project"
                    className="w-full mt-1 p-2 border border-border rounded"
                  >
                    <option value="">Choose a project...</option>
                    {projects.map(project => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="list">Select List</Label>
                  <select 
                    id="list"
                    className="w-full mt-1 p-2 border border-border rounded"
                  >
                    <option value="">Choose a list...</option>
                    {lists.map(list => (
                      <option key={list.id} value={list.id}>
                        {list.name} ({list.count.toLocaleString()} subscribers)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Template Selection */}
              <div>
                <Label htmlFor="template">Select Template</Label>
                <select 
                  id="template"
                  className="w-full mt-1 p-2 border border-border rounded"
                >
                  <option value="">Choose a template...</option>
                  {campaignTemplates.map(template => (
                    <option key={template.id} value={template.id}>
                      {template.name} ({template.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Scheduling Options */}
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Scheduling Options</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="send-now" 
                      name="schedule-type" 
                      defaultChecked 
                    />
                    <Label htmlFor="send-now">Send immediately</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="schedule-later" 
                      name="schedule-type" 
                    />
                    <Label htmlFor="schedule-later">Schedule for later</Label>
                  </div>
                  
                  <div className="ml-6 grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="schedule-date">Date</Label>
                      <Input 
                        id="schedule-date"
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="schedule-time">Time</Label>
                      <Input 
                        id="schedule-time"
                        type="time" 
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaign Preview */}
              <div className="border border-border rounded-lg p-4 bg-secondary/20">
                <h3 className="font-semibold mb-3">Campaign Preview</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Campaign:</span> New Campaign</p>
                  <p><span className="font-medium">Subject:</span> Your email subject</p>
                  <p><span className="font-medium">Recipients:</span> Select a list to see count</p>
                  <p><span className="font-medium">Send Time:</span> Immediately</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Email
                </Button>
                <Button variant="outline" className="flex-1">
                  Save as Draft
                </Button>
                <Button variant="hero" className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Schedule Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CampaignScheduling;