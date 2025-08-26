import { useState } from "react";
import { Calendar, Clock, User, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "email-marketing", name: "Email Marketing" },
    { id: "automation", name: "Automation" },
    { id: "analytics", name: "Analytics" },
    { id: "design", name: "Design" },
    { id: "tips", name: "Tips & Tricks" }
  ];

  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Email Marketing Automation in 2024",
    excerpt: "Discover how to create powerful automated email sequences that convert subscribers into customers. Learn the latest strategies and best practices.",
    content: "Email marketing automation has become essential for modern businesses...",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "automation",
    featured: true,
    image: "/api/placeholder/800/400"
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Email Design Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the curve with these cutting-edge email design trends that will help your campaigns stand out in crowded inboxes.",
      author: "Mike Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "design",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "How to Improve Your Email Deliverability Rate",
      excerpt: "Learn the technical and strategic approaches to ensure your emails reach the inbox, not the spam folder.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "email-marketing",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Advanced Segmentation Strategies for Higher Engagement",
      excerpt: "Dive deep into customer segmentation techniques that can dramatically improve your email campaign performance.",
      author: "David Park",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "analytics",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Creating Welcome Email Series That Convert",
      excerpt: "Master the art of first impressions with welcome email sequences that turn new subscribers into loyal customers.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "automation",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Mobile Email Optimization Best Practices",
      excerpt: "With 60% of emails opened on mobile devices, learn how to create mobile-first email designs that engage users.",
      author: "Alex Kumar",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "design",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Psychology Behind Effective Email Subject Lines",
      excerpt: "Understand the psychological triggers that make subscribers click and how to craft irresistible subject lines.",
      author: "Rachel Green",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "tips",
      featured: false,
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "email-marketing": "bg-blue-100 text-blue-800",
      "automation": "bg-green-100 text-green-800",
      "analytics": "bg-purple-100 text-purple-800",
      "design": "bg-pink-100 text-pink-800",
      "tips": "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Email Marketing{" "}
              <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest email marketing strategies, tips, and industry trends 
              to grow your business.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="border-border shadow-soft overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    {categories.find(c => c.id === featuredPost.category)?.name}
                  </Badge>
                  <h3 className="text-2xl font-bold mt-4 mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="mr-2 h-4 w-4" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Button variant="hero">Read Full Article</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="pb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
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
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border-border shadow-soft hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <CardHeader>
                    <Badge className={getCategoryColor(post.category)}>
                      {categories.find(c => c.id === post.category)?.name}
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2 mt-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <User className="mr-1 h-3 w-3" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="mr-1 h-3 w-3" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or category filters
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest email marketing insights delivered to your inbox. 
              No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;