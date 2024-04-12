import React from "react";
import css from "./SkillsSection.module.scss";

import SkillsSubSection from "../SkillsSubSection";

const SkillsSection = () => {
  let allSkillsDetails = [
    {
      title: "Web Technology Stack & Programming",
      skills: ["HTML, CSS, Javascript, Typescript ", "React, Angular, Node.js (Basics), mongoDB, Bootstrap, Material UI", "C, C++, Java, Python (Basics)"],
    },
    {
      title: "Network Security & VAPT Tools | Digital Forensics Tools",
      skills: ["Wireshark, Nmap, Nessus, Burp Suite, Metasploit, OWASP Zap", "Beef, Open puff, Dmitry, Whatweb, OSINT, UFED, Encase, FTK"],
    },
    {
      title: "Services",
      skills: ["Firebase", "GitHub"]
    },
  ];

  return (
    <div className={css.body}>
      <p className={css.sectionTitle}>PROGRAMMING SKILLS</p>

      {allSkillsDetails.map((skillDetails, index) => {
        return (
          <div key={index} className={css.skillsSubSection}>
            <SkillsSubSection skillDetails={skillDetails} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
