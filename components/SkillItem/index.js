import React from "react";
import css from "./SkillItem.module.scss";

const SkillItem = (props) => {
  const { skill } = props;

  return (
    <div className={css.body}>
      <p className={css.skillItem}>{skill}</p>
    </div>
  );
};

export default SkillItem;
