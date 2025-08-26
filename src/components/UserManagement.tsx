import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Upload, 
  Download, 
  Search,
  Filter,
  UserPlus,
  Tag,
  Trash2,
  Edit,
  Plus
} from "lucide-react";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedList, setSelectedList] = useState("all");

  const userLists = [
    { id: "all", name: "All Users", count: 8791 },
    { id: "beta", name: "Beta Users", count: 1245 },
    { id: "newsletter", name: "Newsletter", count: 5632 },
    { id: "launch", name: "Notify on Launch", count: 2341 },
    { id: "customers", name: "Customers", count: 987 }
  ];

  const users = [
    {
      id: 1,
      email: "john.doe@example.com",
      name: "John Doe",
      tags: ["beta", "newsletter"],
      joinDate: "2024-01-15",
      status: "active",
      lists: ["Beta Users", "Newsletter"]
    },
    {
      id: 2,
      email: "jane.smith@example.com", 
      name: "Jane Smith",
      tags: ["newsletter", "customers"],
      joinDate: "2024-01-10",
      status: "active",
      lists: ["Newsletter", "Customers"]
    },
    {
      id: 3,
      email: "bob.wilson@example.com",
      name: "Bob Wilson", 
      tags: ["launch"],
      joinDate: "2024-01-20",
      status: "unsubscribed",
      lists: ["Notify on Launch"]
    }
  ];

  const segments = [
    { id: 1, name: "High Engagement", users: 1250, criteria: "Opened last 3 emails" },
    { id: 2, name: "New Subscribers", users: 456, criteria: "Joined in last 30 days" },
    { id: 3, name: "Product Interest", users: 789, criteria: "Clicked product links" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">User Management</h2>
        <p className="text-muted-foreground">Manage your subscriber lists and segments</p>
      </div>

      <Tabs defaultValue="lists" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lists">User Lists</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
          <TabsTrigger value="import">Import/Export</TabsTrigger>
        </TabsList>

        <TabsContent value="lists" className="space-y-6">
          {/* List Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {userLists.map((list) => (
              <Card 
                key={list.id} 
                className={`border-border shadow-soft cursor-pointer transition-colors ${
                  selectedList === list.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedList(list.id)}
              >
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{list.count.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{list.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search and Filters */}
          <Card className="border-border shadow-soft">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users by email or name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="hero" size="sm">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User List */}
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Users in {userLists.find(l => l.id === selectedList)?.name || 'All Lists'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div>
                          <h4 className="font-medium text-foreground">{user.name}</h4>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        {user.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Lists: {user.lists.join(', ')} • Joined {user.joinDate}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments" className="space-y-6">
          <Card className="border-border shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>User Segments</CardTitle>
                <Button variant="hero">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Segment
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {segments.map((segment) => (
                  <div key={segment.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">{segment.name}</h4>
                      <p className="text-sm text-muted-foreground">{segment.criteria}</p>
                      <p className="text-xs text-muted-foreground mt-1">{segment.users} users</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">View Users</Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="import" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Import Users */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  Import Users
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Upload a CSV file with user data. Required columns: email, name (optional)
                </p>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Drag & drop your CSV file here, or click to browse
                  </p>
                  <Button variant="outline" className="mt-3">
                    Choose File
                  </Button>
                </div>
                <Button variant="hero" className="w-full">
                  Import Users
                </Button>
              </CardContent>
            </Card>

            {/* Export Users */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Export Users
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Download your user data as a CSV file
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Select List:</label>
                    <select className="w-full mt-1 p-2 border border-border rounded">
                      <option>All Users</option>
                      <option>Beta Users</option>
                      <option>Newsletter</option>
                      <option>Notify on Launch</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Include:</label>
                    <div className="mt-2 space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Email addresses</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Names</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Tags</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Join dates</span>
                      </label>
                    </div>
                  </div>
                </div>
                <Button variant="hero" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserManagement;