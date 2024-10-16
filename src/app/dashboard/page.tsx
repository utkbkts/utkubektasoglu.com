import MenuLinks from "@/components/menuLinks/menuLinks";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto mt-24">
      <div className="flex gap-4">
        <div className="w-2/3 mds:block hidden  bg-white dark:bg-[#2b2b2b] rounded-xl">
          <Sidebar />
        </div>
        <div className="w-full relative">
          <MenuLinks />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
