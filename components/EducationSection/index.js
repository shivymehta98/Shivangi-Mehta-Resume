import React from "react";
import css from "./EducationSection.module.scss";

import EducationItem from "../EducationItem";

const EducationSection = () => {
  let educations = [
    {
      title: "Doctor of Philosophy (Pursuing)",
      instituteName: "Gujarat Technological University",
      startDate: "2022",
      endDate: "ongoing",
      location: "Ahmedabad, IN"
    },
    {
      title: "Master of Technology (Cyber Security)",
      instituteName: "Rashtriya Raksha University",
      startDate: "2019",
      endDate: "2021",
      location: "Gandhinagar, IN"
    },
    {
      title: "Bachelor in Computer Engineering",
      instituteName: "Gujarat Technological University",
      startDate: "2015",
      endDate: "2019",
      location: "Ahmedabad, IN"
    },
  ];

  return (
    <div className={css.body}>
      <p className={css.sectionTitle}>Education</p>

      {educations.map((education, index) => {
        return (
          <div key={index} className={css.educationItem}>
            <EducationItem education={education} />
          </div>
        );
      })}
    </div>
  );
};

export default EducationSection;
