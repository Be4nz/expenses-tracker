import React from "react";
import { NavData } from "./navigationData";
import NavUnitCard from "./navUnitCard";

interface props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SideNav: React.FC<props> = ({ isOpen, toggleOpen }) => {
  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      {NavData.map((data) => (
        <NavUnitCard
          key={data.id}
          text={data.text}
          icon={data.icon}
          link={data.link}
        />
      ))}
    </div>
  );
};

export default SideNav;
