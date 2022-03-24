import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

function Navigation() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
}

export default Navigation;