import React from "react";
import styles from "./styles.module.css";

import { AppBar, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}></NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
          ></Tabs>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
