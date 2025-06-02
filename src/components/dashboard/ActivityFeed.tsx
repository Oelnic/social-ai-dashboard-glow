
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, AlertTriangle, CheckCircle } from "lucide-react";

export const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: "member_joined",
      title: "John Smith joined the community",
      time: "2 minutes ago",
      icon: Users,
      color: "blue"
    },
    {
      id: 2,
      type: "engagement",
      title: "Post about product updates got 150+ reactions",
      time: "15 minutes ago",
      icon: Heart,
      color: "pink"
    },
    {
      id: 3,
      type: "moderation",
      title: "Spam message auto-removed in #general",
      time: "32 minutes ago",
      icon: AlertTriangle,
      color: "yellow"
    },
    {
      id: 4,
      type: "milestone",
      title: "Community reached 25K members!",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "green"
    }
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      pink: "text-pink-600 bg-pink-100",
      yellow: "text-yellow-600 bg-yellow-100",
      green: "text-green-600 bg-green-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-full ${getIconColor(activity.color)}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 mb-1">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
