import React from "react";
import "../styles/header.css";
import webbaner from "../assets/headerPic/webbanner.gif"

export default function Header() {
  return (
    <header className="header">
    <img src={webbaner} alt="Header" className="header-img" />
    </header>
  );
}