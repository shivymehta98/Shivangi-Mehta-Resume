import React from "react";
import css from "./ExperienceItem.module.scss";

const ExperienceItem = (props) => {
  const { experience } = props;
  return (
    <div className={css.body}>
      <p className={css.subSectionTitle}>{experience.title}</p>
      <p className={css.companyNameText}>{experience.companyName}</p>

      <div className={css.dateAndLocationSection}>
        <div className={css.dateSection}>
          <img className={css.calendarIcon} src={"/calendar.png"} />
          <p className={css.infoText}>
            {experience.startDate} - {experience.endDate}
          </p>
        </div>

        <div className={css.locationSection}>
          <img className={css.locationIcon} src={"/pin-black.png"} />
          <p className={css.infoText}>{experience.location}</p>
        </div>
      </div>

      <div className={css.detailsSection}>
        <p className={css.descriptionText}>{experience.companyDescription}</p>

        <ul className={css.reponsibilitiesList}>
          {experience.reponsibilities.map((responsibility, i) => {
            return (
              <li
                key={i}
                className={css.responsibilityItem}
                dangerouslySetInnerHTML={{ __html: responsibility }}
              />
            );
          })}
        </ul>
      </div>

      <div className={css.subSectionSeparator} />
    </div>
  );
};

export default ExperienceItem;
