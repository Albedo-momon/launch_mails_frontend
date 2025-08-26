import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Mail, 
  MousePointer, 
  UserMinus, 
  AlertTriangle,
  Calendar,
  Download
} from "lucide-react";

const Analytics = () => {
  const [selectedProject, setSelectedProject] = useState("all");
  const [timeRange, setTimeRange] = useState("30d");

  // Sample analytics data
  const metrics = [
    { 
      label: "Total Sent", 
      value: "125,847", 
      change: "+12.5%", 
      trend: "up",
      icon: Mail 
    },
    { 
      label: "Open Rate", 
      value: "24.8%", 
      change: "+2.1%", 
      trend: "up",
      icon: TrendingUp 
    },
    { 
      label: "Click Rate", 
      value: "4.2%", 
      change: "-0.3%", 
      trend: "down",
      icon: MousePointer 
    },
    { 
      label: "Unsubscribes", 
      value: "186", 
      change: "+5.2%", 
      trend: "down",
      icon: UserMinus 
    }
  ];

  const emailPerformanceData = [
    { name: 'Jan', sent: 4000, opened: 980, clicked: 168 },
    { name: 'Feb', sent: 3000, opened: 720, clicked: 126 },
    { name: 'Mar', sent: 5000, opened: 1250, clicked: 225 },
    { name: 'Apr', sent: 4500, opened: 1080, clicked: 189 },
    { name: 'May', sent: 6000, opened: 1440, clicked: 252 },
    { name: 'Jun', sent: 5500, opened: 1320, clicked: 231 }
  ];

  const campaignData = [
    { name: 'Welcome Series', sent: 12500, opened: 3125, clicked: 525, revenue: '$2,450' },
    { name: 'Product Launch', sent: 8900, opened: 2225, clicked: 389, revenue: '$1,890' },
    { name: 'Newsletter Weekly', sent: 15600, opened: 3744, clicked: 468, revenue: '$890' },
    { name: 'Black Friday', sent: 22000, opened: 6160, clicked: 1540, revenue: '$8,750' },
    { name: 'Abandoned Cart', sent: 5600, opened: 1568, clicked: 336, revenue: '$3,200' }
  ];

  const deviceData = [
    { name: 'Desktop', value: 45, color: '#3B82F6' },
    { name: 'Mobile', value: 42, color: '#1E40AF' },
    { name: 'Tablet', value: 13, color: '#60A5FA' }
  ];

  const projects = [
    { id: "all", name: "All Projects" },
    { id: "website-a", name: "Website A" },
    { id: "website-b", name: "Website B" },
    { id: "mobile-app", name: "Mobile App" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Track your email campaign performance</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              {projects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7 days</SelectItem>
              <SelectItem value="30d">30 days</SelectItem>
              <SelectItem value="90d">90 days</SelectItem>
              <SelectItem value="1y">1 year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <Badge 
                      variant={metric.trend === 'up' ? 'default' : 'secondary'}
                      className="mt-2"
                    >
                      {metric.change}
                    </Badge>
                  </div>
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="deliverability">Deliverability</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Email Performance Chart */}
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle>Email Performance Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={emailPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }} 
                  />
                  <Bar dataKey="sent" fill="hsl(var(--primary))" name="Sent" />
                  <Bar dataKey="opened" fill="hsl(var(--accent))" name="Opened" />
                  <Bar dataKey="clicked" fill="hsl(var(--secondary))" name="Clicked" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Device Breakdown */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {deviceData.map((device) => (
                    <div key={device.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: device.color }}
                        />
                        <span className="text-sm">{device.name}</span>
                      </div>
                      <span className="text-sm font-medium">{device.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Times */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Best Send Times</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-border rounded">
                    <div>
                      <p className="font-medium">Tuesday 10:00 AM</p>
                      <p className="text-sm text-muted-foreground">Open rate: 28.5%</p>
                    </div>
                    <Badge variant="default">Best</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded">
                    <div>
                      <p className="font-medium">Thursday 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">Open rate: 26.2%</p>
                    </div>
                    <Badge variant="secondary">Good</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded">
                    <div>
                      <p className="font-medium">Wednesday 9:00 AM</p>
                      <p className="text-sm text-muted-foreground">Open rate: 24.8%</p>
                    </div>
                    <Badge variant="outline">Average</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignData.map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{campaign.name}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span>Sent: {campaign.sent.toLocaleString()}</span>
                        <span>Opened: {campaign.opened.toLocaleString()}</span>
                        <span>Clicked: {campaign.clicked.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-primary">{campaign.revenue}</p>
                      <p className="text-sm text-muted-foreground">
                        {((campaign.opened / campaign.sent) * 100).toFixed(1)}% open rate
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Subscriber Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={emailPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="sent" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>List Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Active Subscribers</span>
                  <span className="font-medium">8,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Unsubscribed</span>
                  <span className="font-medium text-yellow-600">234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Bounced</span>
                  <span className="font-medium text-red-600">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cleaned</span>
                  <span className="font-medium text-muted-foreground">12</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Engagement Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85/100</div>
                  <Badge variant="default">Excellent</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your audience is highly engaged
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="deliverability" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Delivery Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Delivered</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-secondary rounded-full mr-2">
                      <div className="w-30 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-medium">94.2%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bounced</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-secondary rounded-full mr-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="font-medium">3.1%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Spam</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-secondary rounded-full mr-2">
                      <div className="w-1 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span className="font-medium">2.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle>Domain Reputation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sender Score</span>
                    <Badge variant="default">92/100</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IP Reputation</span>
                    <Badge variant="default">Good</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Domain Authentication</span>
                    <Badge variant="default">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Blacklist Status</span>
                    <Badge variant="default">Clean</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;