import React, { useState } from "react";
import MenuButton from "./menuButton";
import SideNav from "./sideNav";
import "./styles.css";

const NavigationBar = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <span>
      <MenuButton onClick={handleViewSidebar} />
      <SideNav isOpen={sidebarOpen} toggleOpen={handleViewSidebar} />
    </span>
  );
};

export default NavigationBar;
