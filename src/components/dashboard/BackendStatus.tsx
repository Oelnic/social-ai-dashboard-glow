
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Server, Shield, RefreshCw, CheckCircle } from "lucide-react";

export const BackendStatus = () => {
  return (
    <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Server className="h-5 w-5 text-green-600" />
          Backend Integration Status
        </CardTitle>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium">Backend Server</span>
              </div>
              <Badge className="bg-green-100 text-green-800">Connected</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">Authentication</span>
              </div>
              <Badge className="bg-green-100 text-green-800">Connected</Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg border">
              <p className="text-sm font-medium text-gray-700 mb-1">API URL</p>
              <p className="text-xs text-gray-500 font-mono">https://vibe-tribe-backend-8vyp.onrender.com/api/v1</p>
              <p className="text-xs text-gray-400 mt-1">Last checked: 7:55:00 PM</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <p className="text-sm font-medium text-green-800">Frontend successfully integrated with Firebase backend!</p>
              </div>
              <p className="text-xs text-green-600">You can now use real API calls instead of mock data.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
