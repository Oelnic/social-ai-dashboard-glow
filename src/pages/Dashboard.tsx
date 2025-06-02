
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, TrendingUp, Heart, Server, Shield, RefreshCw } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { CommunityOverview } from "@/components/dashboard/CommunityOverview";
import { BackendStatus } from "@/components/dashboard/BackendStatus";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Members",
      value: "24,847",
      change: "+12.5% from last month",
      icon: Users,
      trend: "up" as const,
      color: "blue"
    },
    {
      title: "Active Members",
      value: "18,492",
      change: "+8.2% from last month",
      icon: TrendingUp,
      trend: "up" as const,
      color: "green"
    },
    {
      title: "Messages Today",
      value: "3,847",
      change: "+23.1% from last month",
      icon: MessageSquare,
      trend: "up" as const,
      color: "purple"
    },
    {
      title: "Engagement Rate",
      value: "74.8%",
      change: "+4.3% from last month",
      icon: Heart,
      trend: "up" as const,
      color: "pink"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600 text-lg">Monitor your community health and engagement metrics</p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Backend Integration Status */}
        <BackendStatus />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Feed - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
          
          {/* Community Overview - Takes up 1 column */}
          <div className="lg:col-span-1">
            <CommunityOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
