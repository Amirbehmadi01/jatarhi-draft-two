import React, { useState } from "react";
import Header from "./components/Header";
import AccordionMenu from "./components/AccordionMenu";
import "./index.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("معرفی");

  return (
    <div className="app-container">
      <Header />
      <AccordionMenu activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}