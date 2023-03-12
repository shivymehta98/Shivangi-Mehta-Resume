import React from "react";
import css from "./EducationSection.module.scss";

import EducationItem from "../EducationItem";

const EducationSection = () => {
  let educations = [
    {
      title: "Bachelor in Computer Engineering",
      instituteName: "SAL Engineering and Technical Institute",
      startDate: "2015",
      endDate: "2019",
      location: "Ahmedabad, IN",
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
