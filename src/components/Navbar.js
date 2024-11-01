import React from "react";
import logo from "../assets/Images/logo.png";
import Title from "./Title";

export default function Navbar() {
  return (
    <>
      <img src={logo} alt="logo" style={{ height: "10vh", margin: "30px" }} />
      <Title />
    </>
  );
}
