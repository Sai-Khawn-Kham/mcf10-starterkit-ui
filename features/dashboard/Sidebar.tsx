import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BookOpen, ChevronsUpDown, Folder, LayoutGrid, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-with-white-border.svg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
];

const footerItems = [
  {
    title: "Repository",
    url: "https://github.com/laravel/react-starter-kit",
    icon: Folder,
  },
  {
    title: "Documentation",
    url: "https://laravel.com/docs/12.x/starter-kits#react",
    icon: BookOpen,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="p-3">
      <SidebarHeader className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-17 text-sm gap-3"
              size="lg"
              render={<a href={"/dashboard"} />}
            >
              <div className="flex items-center justify-center rounded-md">
                <Image src={logo} width={44} height={44} alt="Logo" />
              </div>
              <div className="text-sm">
                <span className="leading-tight font-semibold mb-1">Laravel Starter Kit</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="[&_svg]:size-6">
        <SidebarGroup className="px-3 py-0">
          <SidebarGroupLabel className="h-11 px-2">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<a href={item.url} className="rounded-md gap-2 p-2 h-12 text-sm" />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="gap-3 p-3 [&_svg]:size-6">
        <SidebarGroup className="p-2">
          <SidebarGroupContent className="text-sm">
            <SidebarMenu className="gap-2">
              {footerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<a href={item.url} target="_blank" className="gap-3 p-3 h-11 text-sm" />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              {/* <DropdownMenuTrigger asChild> */}
              <DropdownMenuTrigger render={
                <SidebarMenuButton size="lg" className="gap-3 p-2 h-17 text-sm" suppressHydrationWarning>
                  <Avatar className="size-11">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">KK</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Khawn Kham</span>
                  </div>
                  <ChevronsUpDown />
                </SidebarMenuButton>
              } />
              {/* </DropdownMenuTrigger> */}
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>KK</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Khawn Kham</span>
                    <span className="truncate text-xs text-muted-foreground">khawnkham222@gmail.com</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SidebarMenuButton render={<a href={"/dashboard/settings/profile"} className="rounded-md gap-2 p-2 h-12 text-sm" />}>
                    <Settings className="size-7" />
                    <span className="text-sm">Settings</span>
                  </SidebarMenuButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SidebarMenuButton render={<a href={"/login"} className="rounded-md gap-2 p-2 h-12 text-sm" />}>
                    <LogOut className="size-7" />
                    <span className="text-sm">Logout</span>
                  </SidebarMenuButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
