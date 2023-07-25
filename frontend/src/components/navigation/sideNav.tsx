import React from "react";
import { NavData } from "./navigationData";
import NavUnitCard from "./navUnitCard";
import { logout } from "../../api/login";
import { useNavigate } from "react-router-dom";

interface props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SideNav: React.FC<props> = ({ isOpen, toggleOpen }) => {
  const navigate = useNavigate();

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
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default SideNav;
