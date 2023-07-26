import React from "react";
import { NavData } from "./navigationData";
import NavUnitCard from "./navUnitCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../api/login";

interface props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SideNav: React.FC<props> = ({ isOpen, toggleOpen }) => {
  const handleLogout = async () => {
    await logout();
  };

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
      <NavUnitCard
        text="Sign out"
        icon={<LogoutIcon fontSize="large" />}
        link="/login"
        onClick={handleLogout}
      />
    </div>
  );
};

export default SideNav;
