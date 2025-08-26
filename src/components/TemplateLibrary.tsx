import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Plus, 
  Eye, 
  Edit, 
  Copy,
  Star,
  Search
} from "lucide-react";

const TemplateLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const templates = [
    {
      id: 1,
      name: "Welcome Series",
      category: "onboarding",
      description: "Perfect for new user onboarding",
      preview: "Welcome to [Company]! We're excited to have you join us...",
      isPopular: true,
      colors: ["#3B82F6", "#FFFFFF"]
    },
    {
      id: 2,
      name: "Product Launch",
      category: "announcement",
      description: "Announce new products or features",
      preview: "🚀 [Product Name] is Live! We're excited to announce...",
      isPopular: true,
      colors: ["#1E40AF", "#F3F4F6"]
    },
    {
      id: 3,
      name: "Newsletter",
      category: "newsletter",
      description: "Weekly/monthly newsletter template",
      preview: "This Week's Updates: Here's what's new in [Company]...",
      isPopular: false,
      colors: ["#059669", "#FFFFFF"]
    },
    {
      id: 4,
      name: "Event Invitation",
      category: "event",
      description: "Invite users to events or webinars",
      preview: "You're Invited! Join us for [Event Name] on [Date]...",
      isPopular: false,
      colors: ["#7C3AED", "#F8FAFC"]
    },
    {
      id: 5,
      name: "Sales Promotion",
      category: "promotion",
      description: "Promote sales and special offers",
      preview: "Limited Time Offer! Save 30% on all [Products]...",
      isPopular: true,
      colors: ["#DC2626", "#FEF2F2"]
    },
    {
      id: 6,
      name: "Feedback Request",
      category: "feedback",
      description: "Ask for user feedback and reviews",
      preview: "We'd Love Your Feedback! How was your experience with...",
      isPopular: false,
      colors: ["#F59E0B", "#FFFBEB"]
    }
  ];

  const categories = [
    { id: "all", name: "All Templates" },
    { id: "onboarding", name: "Onboarding" },
    { id: "announcement", name: "Announcements" },
    { id: "newsletter", name: "Newsletter" },
    { id: "event", name: "Events" },
    { id: "promotion", name: "Promotions" },
    { id: "feedback", name: "Feedback" }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Template Library</h2>
        <p className="text-muted-foreground">Choose from professionally designed email templates</p>
      </div>

      {/* Search and Filters */}
      <Card className="border-border shadow-soft">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Create Custom Template */}
      <Card className="border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Create Custom Template
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Start from scratch with our drag-and-drop email editor
          </p>
          <Button variant="hero">
            <Plus className="mr-2 h-4 w-4" />
            Create New Template
          </Button>
        </CardContent>
      </Card>

      {/* Template Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="border-border shadow-soft hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center">
                    {template.name}
                    {template.isPopular && (
                      <Star className="ml-2 h-4 w-4 text-yellow-500 fill-current" />
                    )}
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {template.category}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Color Preview */}
              <div className="flex space-x-1 mb-3">
                {template.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {template.description}
              </p>
              
              {/* Preview Text */}
              <div className="bg-secondary/50 rounded p-3 mb-4">
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {template.preview}
                </p>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  <Copy className="mr-2 h-4 w-4" />
                  Use Template
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <Card className="border-border shadow-soft">
          <CardContent className="py-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No templates found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filters
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TemplateLibrary;