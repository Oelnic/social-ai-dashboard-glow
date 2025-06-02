
import { useState } from "react";
import {
  LayoutDashboard,
  PenTool,
  Calendar,
  FileText,
  Image,
  Inbox,
  MessageCircle,
  Users,
  Globe,
  Heart,
  UserCheck,
  Shield,
  TrendingUp,
  UserPlus,
  ClipboardList,
  Mail,
  GitBranch,
  BarChart3,
  FolderOpen,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isExpandable: false
  },
  {
    title: "Content Management",
    icon: PenTool,
    isExpandable: true,
    subItems: [
      { title: "Create Post", url: "/content/create", icon: PenTool },
      { title: "Scheduler", url: "/content/scheduler", icon: Calendar },
      { title: "Drafts", url: "/content/drafts", icon: FileText },
      { title: "Media Library", url: "/content/media", icon: Image }
    ]
  },
  {
    title: "Communications",
    icon: MessageCircle,
    isExpandable: true,
    subItems: [
      { title: "Inbox", url: "/communications/inbox", icon: Inbox },
      { title: "Team Chat", url: "/communications/team-chat", icon: MessageCircle }
    ]
  },
  {
    title: "Community & Platforms",
    icon: Users,
    isExpandable: true,
    subItems: [
      { title: "Community", url: "/community/overview", icon: Users },
      { title: "Platforms", url: "/community/platforms", icon: Globe },
      { title: "Community Health", url: "/community/health", icon: Heart },
      { title: "Member Management", url: "/community/members", icon: UserCheck },
      { title: "Moderation", url: "/community/moderation", icon: Shield },
      { title: "Engagement", url: "/community/engagement", icon: TrendingUp }
    ]
  },
  {
    title: "Team Management",
    icon: UserPlus,
    isExpandable: true,
    subItems: [
      { title: "Team Activity", url: "/team/activity", icon: TrendingUp },
      { title: "Task Assignment", url: "/team/tasks", icon: ClipboardList },
      { title: "Team Invitations", url: "/team/invitations", icon: Mail },
      { title: "Approval Workflows", url: "/team/workflows", icon: GitBranch }
    ]
  },
  {
    title: "Analytics & Reports",
    icon: BarChart3,
    isExpandable: true,
    subItems: [
      { title: "Analytics", url: "/analytics/overview", icon: BarChart3 },
      { title: "Content Library", url: "/analytics/content", icon: FolderOpen }
    ]
  }
];

export function AppSidebar() {
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState<string[]>(["Dashboard"]);

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(title => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  const isActive = (url: string) => location.pathname === url;
  const isGroupActive = (subItems?: Array<{url: string}>) => 
    subItems?.some(item => isActive(item.url)) || false;

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarContent className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">SocialHub Pro</h2>
          <p className="text-sm text-gray-500">AI-Powered Social Media Manager</p>
        </div>

        <SidebarGroup>
          <SidebarMenu className="space-y-2">
            {navigationItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                {!item.isExpandable ? (
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url!} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                ) : (
                  <Collapsible
                    open={openGroups.includes(item.title)}
                    onOpenChange={() => toggleGroup(item.title)}
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton 
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${
                          isGroupActive(item.subItems)
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                        {openGroups.includes(item.title) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="mt-2 ml-6 space-y-1">
                        {item.subItems?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <NavLink 
                                to={subItem.url}
                                className={({ isActive }) => 
                                  `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                                    isActive 
                                      ? 'bg-blue-100 text-blue-800 font-medium' 
                                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                  }`
                                }
                              >
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
