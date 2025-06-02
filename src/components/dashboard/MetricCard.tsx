
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
  color: "blue" | "green" | "purple" | "pink";
}

export const MetricCard = ({ title, value, change, icon: Icon, trend, color }: MetricCardProps) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    pink: "bg-pink-50 text-pink-600 border-pink-200"
  };

  const iconBgClasses = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    purple: "bg-purple-100",
    pink: "bg-pink-100"
  };

  return (
    <Card className={cn("border-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-1", colorClasses[color])}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-3 rounded-xl", iconBgClasses[color])}>
            <Icon className="h-6 w-6" />
          </div>
          <Badge variant={trend === "up" ? "default" : "destructive"} className="text-xs">
            {trend === "up" ? "↗" : "↘"}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{change}</p>
        </div>
      </CardContent>
    </Card>
  );
};
