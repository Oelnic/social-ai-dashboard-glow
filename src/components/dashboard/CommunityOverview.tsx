
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export const CommunityOverview = () => {
  const communities = [
    {
      name: "Discord Community",
      members: "15,420 members",
      status: "healthy",
      change: "+5.2%",
      trend: "up"
    },
    {
      name: "Telegram Group",
      members: "8,947 members",
      status: "growing",
      change: "+12.8%",
      trend: "up"
    },
    {
      name: "Slack Workspace",
      members: "2,340 members",
      status: "stable",
      change: "-2.1%",
      trend: "down"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-100 text-green-800";
      case "growing":
        return "bg-blue-100 text-blue-800";
      case "stable":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-3 w-3" />;
    if (trend === "down") return <TrendingDown className="h-3 w-3" />;
    return <Minus className="h-3 w-3" />;
  };

  const getTrendColor = (trend: string) => {
    if (trend === "up") return "text-green-600";
    if (trend === "down") return "text-red-600";
    return "text-gray-600";
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Communities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {communities.map((community, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{community.name}</h3>
                <Badge variant="secondary" className={getStatusColor(community.status)}>
                  {community.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{community.members}</p>
              <div className={`flex items-center gap-1 text-sm ${getTrendColor(community.trend)}`}>
                {getTrendIcon(community.trend)}
                <span>{community.change}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
