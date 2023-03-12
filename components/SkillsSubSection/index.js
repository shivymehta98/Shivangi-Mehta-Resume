import React from "react";
import css from "./SkillsSubSection.module.scss";

import SkillItem from "../SkillItem";

const SkillsSubSection = (props) => {
  const { skillDetails } = props;

  return (
    <div className={css.body}>
      <p className={css.subSectionTitle}>{skillDetails.title}</p>

      <div className={css.skillsListSection}>
        {skillDetails.skills.map((skill, index) => {
          return (
            <div key={index} className={css.skillItem}>
              <SkillItem skill={skill} />
            </div>
          );
        })}
      </div>

      <div className={css.subSectionSeparator} />
    </div>
  );
};

export default SkillsSubSection;
