import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DashboardHeader = ({children} : Readonly<{children: React.ReactNode}>) => {
  return (
    <header className=" h-22 flex items-center gap-3 border-b border-sidebar-border/50 px-6 ease-linear">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="h-10 w-10" />
        <div className="text-sm">{children}</div>
      </div>
    </header>
  );
};

export default DashboardHeader;
