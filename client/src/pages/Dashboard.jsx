import { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar";

import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-row min-h-full min-w-fit bg-gradient-to-b from-white to-blue-600 text-gray-800 relative">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          active
        />
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" alert />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Orders" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
      <div>
        <h1>Dashboard</h1>

        {/* Footer */}
        <footer className="bg-white py-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Ctrl+Alt+Employed. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
