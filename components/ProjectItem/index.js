import React from "react";
import css from "./ProjectItem.module.scss";

const ProjectItem = (props) => {
  const { project } = props;
  return (
    <div className={css.body}>
      <p className={css.subSectionTitle}>{project.title}</p>
      <p className={css.companyNameText}>{project.companyName}</p>

      <div className={css.urlSection}>
        <img className={css.urlIcon} src={"/link-black.png"} />
        <a href={project.url} className={css.infoText}>
          {project.url}
        </a>
      </div>

      <div className={css.detailsSection}>
        <p className={css.descriptionText}>{project.description}</p>
      </div>

      <div className={css.subSectionSeparator} />
    </div>
  );
};

export default ProjectItem;