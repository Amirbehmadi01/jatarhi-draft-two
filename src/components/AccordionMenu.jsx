import React from "react";
import Section from "./Section";
import "../styles/accordion.css";

const sections = ["معرفی", "خدمات", "تعرفه‌ها", "نمونه‌کارها", "تماس با ما"];

export default function AccordionMenu({ activeSection, setActiveSection }) {
  return (
    <div className="accordion-container">
      {sections.map((sec) => (
        <Section
          key={sec}
          title={sec}
          isActive={activeSection === sec}
          onClick={() => setActiveSection(sec)}
        />
      ))}
    </div>
  );
}