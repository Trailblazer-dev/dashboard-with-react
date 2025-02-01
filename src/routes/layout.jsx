// Layout component that serves as the main layout for the application

import { Outlet } from "react-router-dom";
import Header from "../layouts/header";
import { Sidebar } from "../layouts/sidebar";
import { cn } from "../utils/cn";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useRef, useState } from "react";

const Layout = () => {
    // Check if the device is a desktop
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    // Set the initial state of the sidebar to collapsed on mobile devices
    const [collapsed, setCollapsed] = useState(true);

    const sidebarRef = useRef(null);

  return (<div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
    <div className={cn("pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity ",!collapsed && "max-md:pointer-events-auto max-md:opacity-30 max-md:z-50")} />
    <Sidebar ref={sidebarRef} collapsed={collapsed}/>
    <div className={cn("transition-[margin] duration-300", collapsed ? "md:ml-[70px]":"md:ml-[240px]")}>
        <Header collapsed={collapsed}
        setCollapsed={setCollapsed} />
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden pb-6">
            <Outlet />
        </div>
    </div>

  </div>
  )
};

export default Layout