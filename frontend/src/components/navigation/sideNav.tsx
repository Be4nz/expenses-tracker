// In Sidenav.js
import { NavLink } from "react-router-dom";
import MenuButton from "./menuButton";
import { navData } from "./navData";
import { useState } from "react";

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div>
      <MenuButton onClick={toggleOpen} />
      {navData.map((item) => {
        return (
          <NavLink key={item.id} className={"sideitem"} to={item.link}>
            <>
              {item.icon}
              <span className={"linkText"}>{item.text}</span>
            </>
          </NavLink>
        );
      })}
    </div>
  );
}
