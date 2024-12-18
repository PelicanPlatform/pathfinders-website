import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return <header className={style.header}>
    <div className={style.nameContainer}>
      <span className={style.name}>Pathfinders</span>
    </div>
  </header>;
};

export default Header;
