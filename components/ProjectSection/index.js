import React from "react";
import css from "./ProjectSection.module.scss";

import ProjectItem from "../ProjectItem";

const ProjectSection = () => {
  let project = [
    {
        companyName: "Restaurant Site (2018)",
    //   companyName: "Medium",
      url: "https://shivymehta98.github.io/Restaurant-site-Replica/",
      description: "A simple restaurant site using HTML, CSS and JavaScript."
    },
    {
        companyName: "EDU-HUB (2019)",
        url: "https://github.com/shivymehta98/eduhub-project",
        description: "An online learning platform for delivering educational content developed in MEAN stack."
      },
      {
        companyName: "Web Replicas",
        url: "https://netflix-clone-c4e91.web.app/", 
        
      },
      {
        url: "https://clone-876a8.web.app/",
      },
      {
        url: "https://airbnb-clone-5cfdb.web.app/",
      },
      {
        companyName: "GitHub Profile",
        url: "https://github.com/shivymehta98",
      },
  ];

  return (
    <div className={css.body}>
      <p className={css.sectionTitle}>Projects</p>

      {project.map((project, index) => {
        return (
          <div key={index} className={css.projectSection}>
            <ProjectItem project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSection;