import React from "react";
import css from "./SkillsSection.module.scss";

import SkillsSubSection from "../SkillsSubSection";

const SkillsSection = () => {
  let allSkillsDetails = [
    {
      title: "Languages",
      skills: ["Swift", "Python", "Javascript", "Typescript", "Kotlin", "Java"],
    },
    {
      title: "Platforms",
      skills: ["iOS", "Web", "Android", "macOS"],
    },
    {
      title: "Libraries",
      skills: ["ReactJS", "NextJS", "React Native", "Redux", "GraphQL", "NodeJS"],
    },
    {
      title: "Services",
      skills: ["Firebase", "Stream Chat", "GitHub Actions", "AWS", "RazorPay", "Docker"],
    },
    {
      title: "Storage",
      skills: ["Core Data", "MongoDB", "MySQL", "Realm"],
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Sketch", "Adobe XD", "Wireframe.cc"],
    },
  ];

  return (
    <div className={css.body}>
      <p className={css.sectionTitle}>SKILLS</p>

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
