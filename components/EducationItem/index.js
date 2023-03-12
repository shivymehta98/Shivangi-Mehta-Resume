import React from "react";
import css from "./EducationItem.module.scss";

const EducationItem = (props) => {
  const { education } = props;
  return (
    <div className={css.body}>
      <p className={css.subSectionTitle}>{education.title}</p>
      <p className={css.instituteNameText}>{education.instituteName}</p>

      <div className={css.dateAndLocationSection}>
        <div className={css.dateSection}>
          <img className={css.calendarIcon} src={"/calendar.png"} />
          <p className={css.infoText}>
            {education.startDate} - {education.endDate}
          </p>
        </div>

        <div className={css.locationSection}>
          <img className={css.locationIcon} src={"/pin-black.png"} />
          <p className={css.infoText}>{education.location}</p>
        </div>
      </div>

      <div className={css.subSectionSeparator} />
    </div>
  );
};

export default EducationItem;
