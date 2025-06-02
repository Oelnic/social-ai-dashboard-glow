
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Users, Lightbulb, Target, BarChart3 } from "lucide-react";

export const AISummary = () => {
  const insights = [
    {
      icon: Clock,
      title: "Peak Engagement Time",
      description: "Your audience is most active between 2-4 PM. Schedule posts accordingly for maximum reach.",
      type: "timing",
      priority: "high"
    },
    {
      icon: BarChart3,
      title: "Content Performance",
      description: "Video content performs 3x better than images. Consider increasing video posts by 40%.",
      type: "content",
      priority: "medium"
    },
    {
      icon: Users,
      title: "Community Health",
      description: "Engagement is up 23% this month. Your community management strategy is working well!",
      type: "positive",
      priority: "low"
    },
    {
      icon: Target,
      title: "Audience Growth",
      description: "Consider targeting similar demographics to your top-performing segments for faster growth.",
      type: "growth",
      priority: "medium"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-indigo-600" />
          AI Insights & Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <insight.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                    <Badge className={getPriorityColor(insight.priority)}>
                      {insight.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
